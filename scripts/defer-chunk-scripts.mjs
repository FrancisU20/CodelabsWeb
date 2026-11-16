const CHUNK_SCRIPT = /<script src="(\/_next\/static\/chunks\/[^"]+\.js)" async=""><\/script>/g;
const CHUNK_PRELOAD = /<link rel="preload" as="script" fetchPriority="low" href="\/_next\/static\/chunks\/[^"]+\.js"\/>/g;
const BODY_END = "</body>";

const loaderScript = (sources) =>
  `<script>(()=>{let started=false;const start=()=>{if(started)return;started=true;${JSON.stringify(sources)}.forEach((src)=>{const tag=document.createElement("script");tag.src=src;tag.async=true;document.head.appendChild(tag)})};addEventListener("load",start);if(PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint"))new PerformanceObserver(()=>setTimeout(start)).observe({type:"largest-contentful-paint",buffered:true})})()</script>`;

export const deferChunkScripts = (page) => {
  const sources = [...new Set([...page.matchAll(CHUNK_SCRIPT)].map((match) => match[1]))];
  if (sources.length === 0) return page;
  return page.replace(CHUNK_SCRIPT, "").replace(CHUNK_PRELOAD, "").replace(BODY_END, `${loaderScript(sources)}${BODY_END}`);
};
