/**
 * Load HTML fragments into [data-include] placeholders.
 * Requires a local server (fetch does not work from file://).
 */
async function loadIncludes() {
  const nodes = [...document.querySelectorAll("[data-include]")];

  await Promise.all(
    nodes.map(async (el) => {
      const path = el.getAttribute("data-include");
      const res = await fetch(path);
      if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
      const html = await res.text();
      el.outerHTML = html;
    })
  );

  document.dispatchEvent(new Event("components:loaded"));
}

loadIncludes().catch((err) => {
  console.error(err);
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<p style="margin:1rem;font-family:sans-serif">Could not load components. Serve this folder over HTTP (e.g. <code>npx serve</code>).</p>`
  );
});
