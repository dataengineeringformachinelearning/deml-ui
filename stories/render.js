/**
 * Shared Storybook render + play helpers.
 * Loads component HTML via import.meta.glob (Vite HMR).
 * Wires interactive demos so overlays/tabs work in Canvas + Docs.
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

function once(el, event, handler) {
  if (!el || el.dataset.demlWired === "true") return;
  el.dataset.demlWired = "true";
  el.addEventListener(event, handler);
}

/** Lightweight demo wiring — keeps stories usable without a full JS framework. */
function initStoryDemos(root) {
  // Native dialog
  const dialog = root.querySelector("dialog.dialog, #demo-dialog, dialog");
  root
    .querySelectorAll("[data-deml-open-dialog], #open-dialog")
    .forEach((btn) => {
      once(btn, "click", () => dialog?.showModal?.());
    });

  // Confirm dialog
  const confirm = root.querySelector("dialog.confirm-dialog");
  root.querySelectorAll("[data-deml-open-confirm]").forEach((btn) => {
    once(btn, "click", () => confirm?.showModal?.());
  });

  // Sheet (simple show/hide)
  const sheet = root.querySelector(".sheet");
  root.querySelectorAll("[data-deml-open-sheet]").forEach((btn) => {
    once(btn, "click", () => {
      if (!sheet) return;
      sheet.hidden = false;
      sheet.setAttribute("data-open", "true");
    });
  });
  root.querySelectorAll(".sheet__close, [data-deml-close-sheet]").forEach((btn) => {
    once(btn, "click", () => {
      if (!sheet) return;
      sheet.hidden = true;
      sheet.removeAttribute("data-open");
    });
  });

  // Tabs
  const tablist = root.querySelector('[role="tablist"]');
  if (tablist && tablist.dataset.demlWired !== "true") {
    tablist.dataset.demlWired = "true";
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    const panels = tabs.map((tab) =>
      root.querySelector(`#${CSS.escape(tab.getAttribute("aria-controls") || "")}`)
    );
    const activate = (index) => {
      tabs.forEach((tab, i) => {
        const selected = i === index;
        tab.setAttribute("aria-selected", selected ? "true" : "false");
        tab.tabIndex = selected ? 0 : -1;
        if (panels[i]) panels[i].hidden = !selected;
      });
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => activate(i));
      tab.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          activate((i + 1) % tabs.length);
          tabs[(i + 1) % tabs.length].focus();
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          activate((i - 1 + tabs.length) % tabs.length);
          tabs[(i - 1 + tabs.length) % tabs.length].focus();
        }
      });
    });
  }

  // Dropdown / popover toggles
  root.querySelectorAll(".dropdown").forEach((dropdown) => {
    if (dropdown.dataset.demlWired === "true") return;
    dropdown.dataset.demlWired = "true";
    const trigger = dropdown.querySelector(".dropdown__trigger");
    const menu = dropdown.querySelector(".dropdown__menu");
    if (!trigger || !menu) return;
    const setOpen = (open) => {
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      menu.hidden = !open;
    };
    setOpen(trigger.getAttribute("aria-expanded") === "true");
    trigger.addEventListener("click", () => {
      setOpen(trigger.getAttribute("aria-expanded") !== "true");
    });
  });

  root.querySelectorAll(".popover").forEach((popover) => {
    if (popover.dataset.demlWired === "true") return;
    popover.dataset.demlWired = "true";
    const trigger = popover.querySelector(".popover__trigger");
    const panel = popover.querySelector(".popover__panel");
    if (!trigger || !panel) return;
    const setOpen = (open) => {
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      panel.hidden = !open;
    };
    setOpen(trigger.getAttribute("aria-expanded") === "true");
    trigger.addEventListener("click", () => {
      setOpen(trigger.getAttribute("aria-expanded") !== "true");
    });
  });

  // Disclosure
  root.querySelectorAll(".disclosure").forEach((node) => {
    if (node.dataset.demlWired === "true") return;
    node.dataset.demlWired = "true";
    const trigger = node.querySelector(".disclosure__trigger");
    const panel = node.querySelector(".disclosure__panel");
    if (!trigger || !panel) return;
    trigger.addEventListener("click", () => {
      const open = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", open ? "false" : "true");
      panel.hidden = open;
    });
  });

  // Theme toggle (demo only — flips data-theme on document)
  root.querySelectorAll(".theme-toggle").forEach((btn) => {
    once(btn, "click", () => {
      const rootEl = document.documentElement;
      const next = rootEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
      rootEl.setAttribute("data-theme", next);
      rootEl.classList.toggle("dark", next === "dark");
      btn.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
    });
  });

  // Command palette: focus search input
  const commandInput = root.querySelector(".command__input");
  if (commandInput && root.querySelector(".command")) {
    queueMicrotask(() => commandInput.focus());
  }
}

export function renderComponent(name) {
  const root = document.createElement("div");
  root.className = "story-root";
  root.dataset.component = name;
  root.innerHTML = getHtml(name);
  queueMicrotask(() => initStoryDemos(root));
  return root;
}

/**
 * Storybook play helper — ensures interactive wiring after paint.
 */
export async function playComponent(name, canvasElement) {
  const root =
    canvasElement?.querySelector?.(`.story-root[data-component="${name}"]`) ||
    canvasElement?.querySelector?.(".story-root") ||
    canvasElement;
  if (!root) return;
  await Promise.resolve();
  initStoryDemos(root);
}

export function toExportName(kebab) {
  return kebab
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export { getHtml, initStoryDemos };
