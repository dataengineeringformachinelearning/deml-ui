/**
 * Demo wiring for canvas / dialog / template / output controls.
 */

function wireOutputSum(root, aSel, bSel, sumSel) {
  const a = root.querySelector(aSel);
  const b = root.querySelector(bSel);
  const sum = root.querySelector(sumSel);
  if (!a || !b || !sum) return;

  const update = () => {
    sum.value = String(Number(a.value) + Number(b.value));
  };
  a.addEventListener("input", update);
  b.addEventListener("input", update);
}

export function initDemos(root = document) {
  const canvas = root.querySelector("#demo-canvas");
  if (canvas?.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#5C2A5A";
    ctx.fillRect(20, 20, 160, 60);
    ctx.fillStyle = "#fff";
    ctx.font = "16px Geist, system-ui, sans-serif";
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
    clone.querySelector("h3").textContent = "From <template>";
    clone.querySelector("p").textContent = "Cloned into the page with JavaScript.";
    mount.appendChild(clone);
  }

  wireOutputSum(root, "#output-a", "#output-b", "#output-sum");
  wireOutputSum(root, "#mega-a", "#mega-b", "#mega-sum");
}
