import type { JsonValue } from "./json-value";

const SCHEMA_CONTEXT = "https://schema.org";

const JsonLdScript = ({ data }: { data: { [key: string]: JsonValue } }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": SCHEMA_CONTEXT, ...data }) }} />
);

export default JsonLdScript;
