/**
 * Demo wiring for media / forms / interactive / scripting components.
 * Runs after fragments are injected.
 */
function initDemos() {
  const canvas = document.getElementById("demo-canvas");
  if (canvas?.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0b5fff";
    ctx.fillRect(20, 20, 160, 60);
    ctx.fillStyle = "#fff";
    ctx.font = "16px sans-serif";
    ctx.fillText("Canvas", 75, 55);
  }

  const dialog = document.getElementById("demo-dialog");
  document.getElementById("open-dialog")?.addEventListener("click", () => {
    dialog?.showModal();
  });

  const template = document.getElementById("card-template");
  const mount = document.getElementById("template-mount");
  if (template && mount && !mount.hasChildNodes()) {
    const clone = template.content.cloneNode(true);
    clone.querySelector("h3").textContent = "From <template>";
    clone.querySelector("p").textContent = "Cloned into the page with JavaScript.";
    mount.appendChild(clone);
  }

  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const sum = document.getElementById("sum");
  const updateSum = () => {
    if (a && b && sum) sum.value = Number(a.value) + Number(b.value);
  };
  a?.addEventListener("input", updateSum);
  b?.addEventListener("input", updateSum);
}

document.addEventListener("components:loaded", initDemos);
