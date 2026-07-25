/**
 * Secure HTML includes for [data-include].
 * Same-origin only; paths must resolve under ./components/.
 */
import { initDemos } from "./demos.js";

const COMPONENTS_ROOT = new URL("./", import.meta.url);
const MAX_DEPTH = 8;

function resolveInclude(raw) {
  if (typeof raw !== "string" || !raw.trim()) {
    throw new Error("Missing data-include path");
  }
  if (raw.includes("\0") || raw.includes("..")) {
    throw new Error(`Blocked include path: ${raw}`);
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(raw) || raw.startsWith("//")) {
    throw new Error(`Blocked absolute/remote include: ${raw}`);
  }

  const url = new URL(raw, document.baseURI);
  if (url.origin !== location.origin) {
    throw new Error(`Blocked cross-origin include: ${raw}`);
  }
  if (!url.href.startsWith(COMPONENTS_ROOT.href)) {
    throw new Error(`Include must be under components/: ${raw}`);
  }
  return url;
}

function parseFragment(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  // Includes are static markup only — never execute embedded scripts
  template.content.querySelectorAll("script").forEach((el) => el.remove());
  return template.content;
}

async function loadIncludes(depth = 0) {
  const nodes = [...document.querySelectorAll("[data-include]")];
  if (nodes.length === 0) {
    document.dispatchEvent(new Event("components:loaded"));
    initDemos();
    return;
  }
  if (depth >= MAX_DEPTH) {
    throw new Error("Include depth exceeded");
  }

  await Promise.all(
    nodes.map(async (el) => {
      const url = resolveInclude(el.getAttribute("data-include"));
      const res = await fetch(url, {
        credentials: "same-origin",
        headers: { Accept: "text/html" },
      });
      if (!res.ok) {
        throw new Error(`Failed to load ${url.pathname}: ${res.status}`);
      }
      el.replaceWith(parseFragment(await res.text()));
    })
  );

  await loadIncludes(depth + 1);
}

loadIncludes().catch((err) => {
  console.error(err);
  document.body.prepend(
    Object.assign(document.createElement("p"), {
      className: "include-error",
      textContent:
        "Could not load components. Run a local server (npm run dev) and open that URL.",
    })
  );
});
