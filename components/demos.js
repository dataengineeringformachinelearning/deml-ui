/**
 * Demo wiring for the Vite reference site (index.html).
 * Storybook uses stories/render.js (same patterns).
 */
import { initSvgCharts } from "../src/charts/svg-mount.js";

export function initDemos(root = document) {
  const dialog = root.querySelector("dialog.dialog, #demo-dialog");
  root.querySelectorAll("[data-deml-open-dialog], #open-dialog").forEach((btn) => {
    btn.addEventListener("click", () => dialog?.showModal?.());
  });

  const confirm = root.querySelector("dialog.confirm-dialog");
  root.querySelectorAll("[data-deml-open-confirm]").forEach((btn) => {
    btn.addEventListener("click", () => confirm?.showModal?.());
  });

  root.querySelectorAll('[role="tablist"]').forEach((tablist) => {
    const scope = tablist.closest(".tabs") || root;
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    const panels = tabs.map((tab) =>
      scope.querySelector(`#${CSS.escape(tab.getAttribute("aria-controls") || "")}`)
    );
    const activate = (index) => {
      tabs.forEach((tab, i) => {
        const selected = i === index;
        tab.setAttribute("aria-selected", selected ? "true" : "false");
        tab.tabIndex = selected ? 0 : -1;
        if (panels[i]) panels[i].hidden = !selected;
      });
    };
    tabs.forEach((tab, i) => tab.addEventListener("click", () => activate(i)));
  });

  root.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const el = document.documentElement;
      const next = el.getAttribute("data-theme") === "dark" ? "light" : "dark";
      el.setAttribute("data-theme", next);
      el.classList.toggle("dark", next === "dark");
      btn.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
    });
  });

  if (root.querySelector("[data-chart]")) {
    initSvgCharts(root);
  }
}
