/**
 * Shared Storybook render helpers.
 * HTML is loaded via import.meta.glob so Vite HMR updates stories when
 * components/<name>/<name>.html changes.
 */

const htmlModules = import.meta.glob("../components/*/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
});

function getHtml(name) {
  const key = `../components/${name}/${name}.html`;
  const html = htmlModules[key];
  if (!html) {
    throw new Error(`Missing component HTML: ${key}`);
  }
  return html;
}

function wireOutputSum(root, aSel, bSel, sumSel) {
  const a = root.querySelector(aSel);
  const b = root.querySelector(bSel);
  const sum = root.querySelector(sumSel);
  const updateSum = () => {
    if (a && b && sum) sum.value = Number(a.value) + Number(b.value);
  };
  a?.addEventListener("input", updateSum);
  b?.addEventListener("input", updateSum);
}

/** Lightweight demo wiring for interactive stories (mirrors components/demos.js). */
function initStoryDemos(root) {
  const canvas = root.querySelector("#demo-canvas");
  if (canvas?.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#5C2A5A";
    ctx.fillRect(20, 20, 160, 60);
    ctx.fillStyle = "#fff";
    ctx.font = "16px Roboto, sans-serif";
    ctx.fillText("Canvas", 75, 55);
  }

  const dialog = root.querySelector("#demo-dialog");
  root.querySelector("#open-dialog")?.addEventListener("click", () => {
    dialog?.showModal();
  });

  const template = root.querySelector("#card-template");
  const mount = root.querySelector("#template-mount");
  if (template && mount && !mount.hasChildNodes()) {
    const clone = template.content.cloneNode(true);
    const title = clone.querySelector("h3");
    const body = clone.querySelector("p");
    if (title) title.textContent = "From <template>";
    if (body) body.textContent = "Cloned into the page with JavaScript.";
    mount.appendChild(clone);
  }

  wireOutputSum(root, "#output-a", "#output-b", "#output-sum");
  wireOutputSum(root, "#mega-a", "#mega-b", "#mega-sum");
}

export function renderComponent(name) {
  const root = document.createElement("div");
  root.className = "story-root";
  root.innerHTML = getHtml(name);
  queueMicrotask(() => initStoryDemos(root));
  return root;
}

export function toExportName(kebab) {
  return kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}
