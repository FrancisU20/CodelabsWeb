import { Duration } from "aws-cdk-lib";
import {
  HeadersFrameOption,
  HeadersReferrerPolicy,
  ResponseHeadersPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import type { Construct } from "constructs";
import { CONTENT_SECURITY_POLICY, PERMISSIONS_POLICY } from "./security-headers";

const strictTransportSecurityMaxAge = Duration.days(365);

export const createSecurityHeadersPolicy = (
  scope: Construct,
  domainName: string,
): ResponseHeadersPolicy =>
  new ResponseHeadersPolicy(scope, "SecurityHeadersPolicy", {
    comment: `${domainName} security headers`,
    securityHeadersBehavior: {
      contentSecurityPolicy: { contentSecurityPolicy: CONTENT_SECURITY_POLICY, override: true },
      contentTypeOptions: { override: true },
      frameOptions: { frameOption: HeadersFrameOption.DENY, override: true },
      referrerPolicy: {
        referrerPolicy: HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
        override: true,
      },
      strictTransportSecurity: {
        accessControlMaxAge: strictTransportSecurityMaxAge,
        includeSubdomains: false,
        override: true,
      },
      xssProtection: { protection: true, modeBlock: true, override: true },
    },
    customHeadersBehavior: {
      customHeaders: [{ header: "Permissions-Policy", value: PERMISSIONS_POLICY, override: true }],
    },
  });
