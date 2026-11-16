const DEFERRABLE_SCRIPT = /<script (?=[^>]*\bsrc=")(?=[^>]*\b(?:async|defer)="")(?![^>]*\bnoModule\b)([^>]*)><\/script>/g;
const SCRIPT_PRELOAD = /<link rel="preload" as="script"[^>]*\/>/g;
const ATTRIBUTE = /([\w-]+)="([^"]*)"/g;
const LOADING_ATTRIBUTES = new Set(["async", "defer"]);
const BODY_END = "</body>";
const HTML_ENTITIES = [
  ["&quot;", '"'],
  ["&#x27;", "'"],
  ["&lt;", "<"],
  ["&gt;", ">"],
  ["&amp;", "&"],
];

const decodeEntities = (value) => HTML_ENTITIES.reduce((decoded, [entity, character]) => decoded.replaceAll(entity, character), value);

const scriptAttributes = (attributes) =>
  Object.fromEntries(
    [...attributes.matchAll(ATTRIBUTE)].filter(([, name]) => !LOADING_ATTRIBUTES.has(name)).map(([, name, value]) => [name, decodeEntities(value)]),
  );

const loaderScript = (scripts) =>
  `<script>(()=>{let started=false;const start=()=>{if(started)return;started=true;${JSON.stringify(scripts).replaceAll("<", "\\u003c")}.forEach((attributes)=>{const tag=document.createElement("script");Object.entries(attributes).forEach(([name,value])=>tag.setAttribute(name,value));tag.async=true;document.head.appendChild(tag)})};const paintAware=PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint");if(paintAware){const painted=new Promise((resolve)=>new PerformanceObserver(resolve).observe({type:"largest-contentful-paint",buffered:true}));Promise.all([painted,document.fonts.ready]).then(()=>requestAnimationFrame(()=>setTimeout(start)))}addEventListener("load",()=>{if(!paintAware||document.visibilityState==="hidden")start()})})()</script>`;

export const deferScripts = (page) => {
  const scripts = [...new Map([...page.matchAll(DEFERRABLE_SCRIPT)].map((match) => scriptAttributes(match[1])).map((attributes) => [attributes.src, attributes])).values()];
  if (scripts.length === 0) return page;
  return page.replace(DEFERRABLE_SCRIPT, "").replace(SCRIPT_PRELOAD, "").replace(BODY_END, `${loaderScript(scripts)}${BODY_END}`);
};
