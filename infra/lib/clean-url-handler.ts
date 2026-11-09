export const buildCleanUrlHandler = (canonicalHost: string): string => `
function queryOf(parameters) {
  var pairs = Object.keys(parameters).map(function (name) {
    return name + "=" + parameters[name].value;
  });
  return pairs.length ? "?" + pairs.join("&") : "";
}

function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var path = uri === "/" ? uri : uri.replace(/\\/+$/, "");

  if (request.headers.host.value !== "${canonicalHost}" || path !== uri) {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: { location: { value: "https://${canonicalHost}" + path + queryOf(request.querystring) } },
    };
  }

  if (uri === "/") {
    request.uri = "/index.html";
    return request;
  }

  if (!uri.includes(".")) {
    request.uri = uri + ".html";
  }

  return request;
}
`;
