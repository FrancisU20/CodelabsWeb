const contentSecurityPolicyDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
];

const permissionsPolicyDirectives = [
  "camera=()",
  "microphone=()",
  "geolocation=()",
  "payment=()",
  "usb=()",
  "interest-cohort=()",
];

export const CONTENT_SECURITY_POLICY = contentSecurityPolicyDirectives.join("; ");

export const PERMISSIONS_POLICY = permissionsPolicyDirectives.join(", ");
