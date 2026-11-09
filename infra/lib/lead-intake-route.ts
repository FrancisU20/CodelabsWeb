import { Fn, type Stack } from "aws-cdk-lib";
import {
  AllowedMethods,
  CachePolicy,
  type Distribution,
  Function as EdgeFunction,
  FunctionCode,
  FunctionEventType,
  FunctionUrlOriginAccessControl,
  OriginProtocolPolicy,
  OriginRequestPolicy,
  type ResponseHeadersPolicy,
  Signing,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { HttpOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import { StringParameter } from "aws-cdk-lib/aws-ssm";

const FUNCTION_URL_PARAMETER = "/codelabs-lead-intake/function-url";
const API_PATH_PATTERN = "/api/*";
const CLIENT_ADDRESS_HANDLER = `
function handler(event) {
  event.request.headers["x-client-ip"] = { value: event.viewer.ip };
  return event.request;
}
`;

export const addLeadIntakeRoute = (
  stack: Stack,
  distribution: Distribution,
  responseHeadersPolicy: ResponseHeadersPolicy,
): void => {
  const functionUrl = StringParameter.valueForStringParameter(stack, FUNCTION_URL_PARAMETER);
  const originAccessControl = new FunctionUrlOriginAccessControl(stack, "LeadIntakeOriginAccessControl", {
    signing: Signing.SIGV4_ALWAYS,
  });
  const clientAddress = new EdgeFunction(stack, "ClientAddressFunction", {
    code: FunctionCode.fromInline(CLIENT_ADDRESS_HANDLER),
  });
  const origin = new HttpOrigin(Fn.select(2, Fn.split("/", functionUrl)), {
    originAccessControlId: originAccessControl.originAccessControlId,
    protocolPolicy: OriginProtocolPolicy.HTTPS_ONLY,
  });

  distribution.addBehavior(API_PATH_PATTERN, origin, {
    allowedMethods: AllowedMethods.ALLOW_ALL,
    cachePolicy: CachePolicy.CACHING_DISABLED,
    originRequestPolicy: OriginRequestPolicy.ALL_VIEWER_EXCEPT_HOST_HEADER,
    responseHeadersPolicy,
    viewerProtocolPolicy: ViewerProtocolPolicy.HTTPS_ONLY,
    functionAssociations: [{ eventType: FunctionEventType.VIEWER_REQUEST, function: clientAddress }],
  });
};
