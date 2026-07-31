#!/usr/bin/env node
/**
 * Write barebones structural CSS for every kept component.
 * Visible composition only — no brand palette lock-in. Style freely.
 */
import fs from "node:fs";
import path from "node:path";
import { componentsDir, listComponents, toPascalCase } from "./lib/components.mjs";

const STRUCTURE = {
  // —— Shell ——
  "skip-link": `
.skip-link {
  position: absolute;
  inset-inline-start: var(--space-sm);
  inset-block-start: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  background: var(--bg);
  border: 1px solid var(--line);
  z-index: 1000;
  transform: translateY(-200%);
}
.skip-link:focus {
  transform: none;
}
`,
  brand: `
.brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}
.brand__mark {
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface);
}
`,
  "app-layout": `
.app-layout {
  display: grid;
  grid-template-columns: minmax(12rem, 16rem) 1fr minmax(0, 18rem);
  min-height: 20rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--bg);
}
.app-layout__nav,
.app-layout__tools {
  padding: var(--space-md);
  background: var(--surface);
  border-inline-end: 1px solid var(--line);
}
.app-layout__tools {
  border-inline-end: 0;
  border-inline-start: 1px solid var(--line);
}
.app-layout__main {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.app-layout__header {
  padding: var(--space-sm) var(--space-md);
  border-block-end: 1px solid var(--line);
}
.app-layout__content {
  padding: var(--space-md);
  flex: 1;
}
@media (max-width: 48rem) {
  .app-layout {
    grid-template-columns: 1fr;
  }
  .app-layout__tools { display: none; }
}
`,
  "app-header": `
.app-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
.app-header__brand {
  font-weight: 600;
  text-decoration: none;
  color: inherit;
}
.app-header__nav {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  flex: 1;
}
.app-header__nav a {
  text-decoration: none;
  color: inherit;
}
.app-header__actions {
  display: flex;
  gap: var(--space-sm);
  margin-inline-start: auto;
}
`,
  "app-sidebar": `
.app-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  min-width: 14rem;
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
}
.app-sidebar__brand { font-weight: 600; margin: 0; }
.app-sidebar__nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
.app-sidebar__nav a {
  text-decoration: none;
  color: inherit;
  padding: var(--space-sm);
  border-radius: var(--radius-sm);
}
.app-sidebar__nav a[aria-current="page"] {
  background: var(--bg);
  border: 1px solid var(--line);
}
`,
  "app-footer": `
.app-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
.app-footer__nav {
  display: flex;
  gap: var(--space-md);
}
.app-footer__nav a { color: inherit; }
`,
  "page-shell": `
.page-shell {
  width: 100%;
}
.page-shell__inner {
  width: min(100%, var(--content-width));
  margin-inline: auto;
  padding: var(--space-md) var(--gutter);
  display: grid;
  gap: var(--space-lg);
}
`,
  "page-header": `
.page-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-md);
}
.page-header__title {
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.25;
}
.page-header__subtitle {
  margin: var(--space-sm) 0 0;
  color: var(--muted);
  max-width: 40rem;
}
.page-header__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}
`,
  "page-template": `
.page-template {
  display: grid;
  gap: var(--space-md);
}
.page-template__header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}
.page-template__header h1 { margin: 0; font-size: 1.5rem; }
.page-template__content,
.page-template__footer {
  min-width: 0;
}
`,
  "page-back-link": `
.page-back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: inherit;
  text-decoration: none;
}
.page-back-link:hover { text-decoration: underline; }
`,
  "content-layout": `
.content-layout {
  display: grid;
  gap: var(--space-md);
}
.content-layout__breadcrumbs { color: var(--muted); font-size: 0.875rem; }
.content-layout__header h1 { margin: 0; font-size: 1.5rem; }
`,
  "sidebar-nav": `
.sidebar-nav {
  display: grid;
  gap: var(--space-sm);
  min-width: 14rem;
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
.sidebar-nav__header {
  margin: 0;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--muted);
}
.sidebar-nav__list,
.sidebar-nav__list ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.25rem;
}
.sidebar-nav a,
.sidebar-nav button {
  display: block;
  width: 100%;
  text-align: start;
  font: inherit;
  color: inherit;
  background: transparent;
  border: 0;
  padding: var(--space-sm);
  border-radius: var(--radius-sm);
  cursor: pointer;
  text-decoration: none;
}
.sidebar-nav a[aria-current="page"] {
  background: var(--surface);
  border: 1px solid var(--line);
}
.sidebar-nav ul { padding-inline-start: var(--space-md); }
`,
  "navigation-menu": `
.navigation-menu__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  list-style: none;
  margin: 0;
  padding: 0;
}
.navigation-menu__link {
  display: inline-flex;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: inherit;
  border: 1px solid transparent;
}
.navigation-menu__link[aria-current="page"] {
  border-color: var(--line);
  background: var(--surface);
}
`,
  breadcrumbs: `
.breadcrumbs__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
}
.breadcrumbs__list li:not(:last-child)::after {
  content: "/";
  margin-inline-start: var(--space-sm);
  color: var(--muted);
}
.breadcrumbs a { color: inherit; }
`,
  "theme-toggle": `
.theme-toggle {
  font: inherit;
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: inherit;
  cursor: pointer;
  min-height: 2.75rem;
}
`,
  profile: `
.profile {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
}
.profile__name { margin: 0; font-weight: 600; }
.profile__meta { margin: 0; color: var(--muted); font-size: 0.875rem; }
`,

  // —— Layout ——
  section: `
.section { display: grid; gap: var(--space-md); }
.section__title { margin: 0; font-size: 1.25rem; }
.section__description { margin: 0; color: var(--muted); max-width: 40rem; }
`,
  "section-template": `
.section-template { display: grid; gap: var(--space-md); }
.section-template__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-md);
}
.section-template__title { margin: 0; font-size: 1.25rem; }
.section-template__description { margin: var(--space-sm) 0 0; color: var(--muted); }
.section-template__divider { border: 0; border-block-start: 1px solid var(--line); margin: 0; }
`,
  container: `
.container {
  display: grid;
  gap: var(--space-md);
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
.container__title { margin: 0; font-size: 1.125rem; }
.container__description { margin: var(--space-sm) 0 0; color: var(--muted); }
`,
  stack: `
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
`,
  grid: `
.grid {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
}
.grid__item {
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
`,
  "panel-grid": `
.panel-grid {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  align-items: stretch;
}
.panel-grid__item {
  display: flex;
  flex-direction: column;
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
  min-height: 8rem;
}
`,
  "form-grid": `
.form-grid {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  align-items: start;
}
.form-grid label {
  display: grid;
  gap: var(--space-sm);
}
`,
  cluster: `
.cluster {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
}
`,
  box: `
.box {
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
`,
  separator: `
.separator {
  border: 0;
  border-block-start: 1px solid var(--line);
  margin: var(--space-md) 0;
}
.separator--vertical {
  display: inline-block;
  width: 1px;
  height: 1.5rem;
  border: 0;
  background: var(--line);
  margin-inline: var(--space-sm);
  vertical-align: middle;
}
`,
  "scroll-area": `
.scroll-area {
  max-height: 10rem;
  overflow: auto;
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
`,
  "split-panel": `
.split-panel {
  display: grid;
  grid-template-columns: 1fr minmax(12rem, 18rem);
  gap: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
  min-height: 12rem;
  background: var(--bg);
}
.split-panel__main { padding: var(--space-md); }
.split-panel__side {
  padding: var(--space-md);
  border-inline-start: 1px solid var(--line);
  background: var(--surface);
}
@media (max-width: 40rem) {
  .split-panel { grid-template-columns: 1fr; }
  .split-panel__side { border-inline-start: 0; border-block-start: 1px solid var(--line); }
}
`,

  // —— Forms ——
  label: `
.label {
  display: inline-block;
  font-weight: 500;
  margin-block-end: var(--space-sm);
}
`,
  field: `
.field {
  display: grid;
  gap: var(--space-sm);
  max-width: 28rem;
}
.field__label-wrap {
  display: grid;
  gap: var(--space-sm);
}
.field__label { font-weight: 500; }
.field__required { margin-inline-start: 0.15rem; }
.field__description,
.field__error {
  margin: 0;
  font-size: 0.875rem;
  color: var(--muted);
}
.field__error { color: var(--ink); }
.field__control,
.field input,
.field select,
.field textarea {
  font: inherit;
  width: 100%;
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: inherit;
}
`,
  "form-section": `
.form-section {
  display: grid;
  gap: var(--space-md);
  max-width: 42rem;
}
.form-section__title { margin: 0; font-size: 1.125rem; }
.form-section__description { margin: 0; color: var(--muted); }
.form-section__body {
  display: grid;
  gap: var(--space-md);
}
.form-section__body label {
  display: grid;
  gap: var(--space-sm);
}
`,
  button: `
.button,
.component--button button,
.button-group button {
  font: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  min-height: 2.75rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: inherit;
  cursor: pointer;
}
.button[data-variant="primary"] {
  background: var(--ink);
  color: var(--bg);
  border-color: var(--ink);
}
.button[data-variant="ghost"] {
  background: transparent;
  border-color: transparent;
}
.button:disabled { opacity: 0.5; cursor: not-allowed; }
`,
  "button-group": `
.button-group {
  display: inline-flex;
  flex-wrap: wrap;
}
.button-group button {
  border-radius: 0;
  margin-inline-start: -1px;
}
.button-group button:first-child { border-radius: var(--radius-sm) 0 0 var(--radius-sm); }
.button-group button:last-child { border-radius: 0 var(--radius-sm) var(--radius-sm) 0; }
`,
  checkbox: `
.checkbox {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--space-sm);
  cursor: pointer;
}
.checkbox input { margin-block-start: 0.2rem; }
`,
  "radio-group": `
.radio-group {
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  display: grid;
  gap: var(--space-sm);
  max-width: 28rem;
}
.radio-group__legend { font-weight: 500; padding-inline: 0.25rem; }
.radio-group__option {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}
`,
  switch: `
.switch {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--space-md);
  cursor: pointer;
  max-width: 28rem;
}
.switch__track {
  position: relative;
  width: 2.75rem;
  height: 1.5rem;
  flex-shrink: 0;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
}
.switch__track input {
  position: absolute;
  inset: 0;
  opacity: 0;
  margin: 0;
  cursor: pointer;
}
.switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 999px;
  background: var(--ink);
  transition: transform 120ms ease;
  pointer-events: none;
}
.switch__track:has(input:checked) .switch__thumb {
  transform: translateX(1.2rem);
}
.switch__label { font-weight: 500; display: block; }
.switch__description { display: block; color: var(--muted); font-size: 0.875rem; }
`,
  toggle: `
.toggle-group {
  display: inline-flex;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  overflow: hidden;
}
.toggle {
  font: inherit;
  min-height: 2.75rem;
  padding: 0.5rem 1rem;
  border: 0;
  background: var(--bg);
  color: inherit;
  cursor: pointer;
}
.toggle + .toggle { border-inline-start: 1px solid var(--line); }
.toggle[aria-pressed="true"] { background: var(--surface); font-weight: 600; }
`,
  autocomplete: `
.autocomplete {
  display: grid;
  gap: var(--space-sm);
  max-width: 28rem;
  position: relative;
}
.autocomplete input {
  font: inherit;
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: inherit;
}
.autocomplete__list {
  list-style: none;
  margin: 0;
  padding: 0.25rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
}
.autocomplete__list [role="option"] {
  padding: var(--space-sm);
  border-radius: var(--radius-sm);
  cursor: pointer;
}
.autocomplete__list [aria-selected="true"] {
  background: var(--surface);
}
`,
  "file-upload": `
.file-upload { display: grid; gap: var(--space-md); max-width: 32rem; }
.file-upload__dropzone {
  display: grid;
  gap: var(--space-sm);
  place-items: center;
  padding: var(--space-lg);
  border: 1px dashed var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
  cursor: pointer;
  text-align: center;
}
.file-upload__input { width: 100%; }
.file-upload__title { font-weight: 600; }
.file-upload__hint { color: var(--muted); font-size: 0.875rem; }
.file-upload__list { list-style: none; margin: 0; padding: 0; }
`,
  progress: `
.component--progress progress,
progress {
  width: min(100%, 20rem);
  height: 0.75rem;
}
`,

  // —— Feedback ——
  badge: `
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 1.5rem;
  padding: 0 0.5rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--surface);
}
`,
  "status-badge": `
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
}
.status-badge__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: var(--ink);
}
`,
  "status-pill": `
.status-pill {
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 0.6rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: var(--surface);
}
`,
  callout: `
.callout {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
}
.callout__heading { margin: 0 0 var(--space-sm); font-weight: 600; }
.callout__text { margin: 0; }
.callout__close {
  margin-inline-start: auto;
  border: 0;
  background: transparent;
  font: inherit;
  cursor: pointer;
  color: inherit;
}
`,
  toast: `
.toast {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--space-sm) var(--space-md);
  max-width: 24rem;
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
  box-shadow: 0 1px 2px color-mix(in srgb, var(--ink) 8%, transparent);
}
.toast__title { margin: 0; font-weight: 600; grid-column: 1; }
.toast__description { margin: 0; color: var(--muted); grid-column: 1; }
.toast__close {
  grid-column: 2;
  grid-row: 1 / span 2;
  align-self: start;
  border: 0;
  background: transparent;
  cursor: pointer;
  font: inherit;
}
`,
  flashbar: `
.flashbar {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-sm);
}
.flashbar__item {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
}
.flashbar__message { margin: 0; flex: 1; }
.flashbar__dismiss {
  border: 0;
  background: transparent;
  cursor: pointer;
  font: inherit;
}
`,
  "empty-state": `
.empty-state {
  display: grid;
  gap: var(--space-sm);
  place-items: center;
  text-align: center;
  padding: var(--space-xl) var(--space-md);
  border: 1px dashed var(--line);
  border-radius: var(--radius-md);
}
.empty-state__eyebrow { margin: 0; color: var(--muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.04em; }
.empty-state__title { margin: 0; font-size: 1.125rem; font-weight: 600; }
.empty-state__description { margin: 0; color: var(--muted); max-width: 28rem; }
.empty-state__actions { margin-block-start: var(--space-sm); display: flex; gap: var(--space-sm); }
`,
  "error-state": `
.error-state {
  display: grid;
  gap: var(--space-sm);
  place-items: center;
  text-align: center;
  padding: var(--space-xl) var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
.error-state__title { margin: 0; font-size: 1.125rem; font-weight: 600; }
.error-state__description { margin: 0; color: var(--muted); max-width: 28rem; }
.error-state__actions { margin-block-start: var(--space-sm); }
`,
  skeleton: `
.skeleton {
  display: grid;
  gap: var(--space-sm);
}
.skeleton__line,
.skeleton__block {
  display: block;
  height: 0.75rem;
  border-radius: var(--radius-sm);
  background: var(--surface);
  border: 1px solid var(--line);
}
.skeleton__line--short { width: 45%; }
.skeleton__line--medium { width: 65%; }
.skeleton__line--long { width: 80%; }
.skeleton__block { height: 4rem; width: 100%; }
`,
  spinner: `
.spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.spinner__visual {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid var(--line);
  border-block-start-color: var(--ink);
  border-radius: 999px;
  animation: deml-spin 0.7s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .spinner__visual { animation: none; border-color: var(--ink); }
}
@keyframes deml-spin {
  to { transform: rotate(360deg); }
}
`,
  "loading-overlay": `
.loading-overlay {
  display: grid;
  place-items: center;
  min-height: 10rem;
  padding: var(--space-lg);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--bg) 92%, transparent);
}
.loading-overlay__message { margin: 0; color: var(--muted); }
`,
  avatar: `
.avatar {
  display: inline-grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--surface);
  overflow: hidden;
  font-weight: 600;
  font-size: 0.75rem;
}
.avatar__image { width: 100%; height: 100%; object-fit: cover; }
`,
  icon: `
.icon { display: inline-block; vertical-align: middle; color: inherit; }
.icon-label { margin-inline-start: var(--space-sm); }
`,
  kbd: `
.kbd {
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
  padding: 0 0.4rem;
  border: 1px solid var(--line);
  border-bottom-width: 2px;
  border-radius: var(--radius-sm);
  background: var(--surface);
  font: inherit;
  font-size: 0.75rem;
}
`,

  // —— Data ——
  card: `
.card {
  display: grid;
  gap: var(--space-md);
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
.card__title { margin: 0; font-size: 1.125rem; }
.card__description { margin: var(--space-sm) 0 0; color: var(--muted); }
.card__footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  padding-block-start: var(--space-sm);
  border-block-start: 1px solid var(--line);
}
`,
  "metric-card": `
.metric-card {
  display: grid;
  gap: var(--space-sm);
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
  min-width: 0;
}
.metric-card__label { margin: 0; color: var(--muted); font-size: 0.875rem; }
.metric-card__value { margin: 0; font-size: 1.75rem; font-weight: 600; line-height: 1.1; }
.metric-card__trend { margin: 0; font-size: 0.875rem; color: var(--muted); }
`,
  "hud-panel": `
.hud-panel {
  display: grid;
  gap: var(--space-md);
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
.hud-panel__header h3 { margin: 0; font-size: 1rem; }
`,
  "status-card": `
.status-card {
  display: grid;
  gap: var(--space-sm);
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
.status-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}
.status-card__title { margin: 0; font-size: 1rem; }
.status-card__description,
.status-card__uptime { margin: 0; color: var(--muted); font-size: 0.875rem; }
`,
  table: `
.component--table table,
table {
  width: 100%;
  border-collapse: collapse;
  font: inherit;
}
.component--table th,
.component--table td,
th, td {
  padding: var(--space-sm) var(--space-md);
  border-block-end: 1px solid var(--line);
  text-align: start;
}
.component--table caption,
caption {
  text-align: start;
  padding-block-end: var(--space-sm);
  color: var(--muted);
}
`,
  pagination: `
.pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
}
.pagination__pages {
  display: flex;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.pagination button {
  font: inherit;
  min-height: 2.5rem;
  min-width: 2.5rem;
  padding: 0.35rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: inherit;
  cursor: pointer;
}
.pagination button[aria-current="page"] {
  background: var(--surface);
  font-weight: 600;
}
`,
  "activity-list": `
.activity-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--bg);
}
.activity-list__item {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 0.15rem var(--space-md);
  padding: var(--space-md);
  border-block-end: 1px solid var(--line);
}
.activity-list__item:last-child { border-block-end: 0; }
.activity-list__item time { color: var(--muted); font-size: 0.875rem; grid-row: 1 / span 2; }
.activity-list__title { margin: 0; font-weight: 500; }
.activity-list__meta { margin: 0; color: var(--muted); font-size: 0.875rem; }
`,
  timeline: `
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--space-md);
  border-inline-start: 2px solid var(--line);
  padding-inline-start: var(--space-md);
}
.timeline__item { display: grid; gap: 0.15rem; }
.timeline__item time { color: var(--muted); font-size: 0.875rem; }
.timeline__title { margin: 0; font-weight: 600; }
.timeline__description { margin: 0; color: var(--muted); }
`,
  chart: `
.chart-figure { margin: 0; display: grid; gap: var(--space-sm); }
.chart { display: block; width: 100%; height: auto; color: var(--ink); }
.chart-figure figcaption { color: var(--muted); font-size: 0.875rem; }
`,
  "chart-panel": `
.chart-panel {
  display: grid;
  gap: var(--space-md);
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
  min-height: 12rem;
}
.chart-panel__header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--space-sm);
}
.chart-panel__header h3 { margin: 0; font-size: 1rem; }
.chart-panel__value { margin: 0; font-size: 1.5rem; font-weight: 600; }
`,
  "chart-empty-state": `
.chart-empty-state {
  display: grid;
  place-items: center;
  gap: var(--space-sm);
  min-height: 10rem;
  padding: var(--space-lg);
  border: 1px dashed var(--line);
  border-radius: var(--radius-md);
  text-align: center;
  color: var(--muted);
}
.chart-empty-state__title { margin: 0; color: var(--ink); font-weight: 600; }
.chart-empty-state__description { margin: 0; }
`,
  "property-filter": `
.property-filter {
  display: grid;
  gap: var(--space-sm);
  max-width: 40rem;
}
.property-filter__control {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  align-items: center;
  padding: var(--space-sm);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
}
.property-filter__tokens {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  list-style: none;
  margin: 0;
  padding: 0;
}
.property-filter__token {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 0.875rem;
}
.property-filter__token button {
  border: 0;
  background: transparent;
  cursor: pointer;
  font: inherit;
}
.property-filter input {
  flex: 1;
  min-width: 10rem;
  border: 0;
  background: transparent;
  font: inherit;
  min-height: 2.25rem;
  color: inherit;
}
`,
  "bulk-toolbar": `
.bulk-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
}
.bulk-toolbar__count { font-weight: 600; margin-inline-end: auto; }
.bulk-toolbar button {
  font: inherit;
  min-height: 2.5rem;
  padding: 0.35rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  cursor: pointer;
  color: inherit;
}
`,

  // —— Overlays ——
  dialog: `
.dialog,
dialog {
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  background: var(--bg);
  color: inherit;
  max-width: min(28rem, calc(100vw - 2rem));
}
.dialog::backdrop,
dialog::backdrop {
  background: color-mix(in srgb, var(--ink) 40%, transparent);
}
.dialog form,
dialog form {
  display: grid;
  gap: var(--space-md);
}
`,
  "confirm-dialog": `
.confirm-dialog {
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  background: var(--bg);
  color: inherit;
  max-width: min(24rem, calc(100vw - 2rem));
}
.confirm-dialog::backdrop {
  background: color-mix(in srgb, var(--ink) 40%, transparent);
}
.confirm-dialog__title { margin: 0 0 var(--space-sm); }
.confirm-dialog__body { margin: 0 0 var(--space-md); color: var(--muted); }
.confirm-dialog__actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
}
`,
  sheet: `
.sheet {
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: min(24rem, 100%);
  min-height: 16rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
.sheet[hidden] { display: none; }
.sheet__header,
.sheet__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  padding: var(--space-md);
  border-block-end: 1px solid var(--line);
}
.sheet__footer {
  border-block-end: 0;
  border-block-start: 1px solid var(--line);
  justify-content: flex-end;
}
.sheet__body { padding: var(--space-md); }
.sheet__close {
  border: 0;
  background: transparent;
  font: inherit;
  cursor: pointer;
}
`,
  dropdown: `
.dropdown { position: relative; display: inline-block; }
.dropdown__trigger {
  font: inherit;
  min-height: 2.75rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  cursor: pointer;
  color: inherit;
}
.dropdown__menu {
  position: absolute;
  inset-block-start: calc(100% + 0.25rem);
  inset-inline-start: 0;
  min-width: 10rem;
  margin: 0;
  padding: 0.25rem;
  list-style: none;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  z-index: 10;
}
.dropdown__menu[hidden] { display: none; }
.dropdown__menu button {
  display: block;
  width: 100%;
  text-align: start;
  font: inherit;
  padding: var(--space-sm);
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: var(--radius-sm);
  color: inherit;
}
.dropdown__menu button:hover { background: var(--surface); }
`,
  popover: `
.popover { position: relative; display: inline-block; }
.popover__trigger {
  font: inherit;
  min-height: 2.75rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  cursor: pointer;
  color: inherit;
}
.popover__panel {
  position: absolute;
  inset-block-start: calc(100% + 0.35rem);
  inset-inline-start: 0;
  min-width: 14rem;
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
  z-index: 10;
  display: grid;
  gap: var(--space-sm);
}
.popover__panel[hidden] { display: none; }
`,
  tooltip: `
.tooltip-trigger {
  font: inherit;
  min-height: 2.75rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  cursor: pointer;
  color: inherit;
}
.tooltip {
  display: inline-block;
  margin-inline-start: var(--space-sm);
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--ink);
  color: var(--bg);
  font-size: 0.75rem;
}
`,
  tabs: `
.tabs { display: grid; gap: var(--space-md); }
.tabs__list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  padding: var(--space-sm);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
}
.tabs__tab {
  font: inherit;
  min-height: 2.5rem;
  padding: 0.35rem 0.85rem;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  background: transparent;
  cursor: pointer;
  color: inherit;
}
.tabs__tab[aria-selected="true"] {
  background: var(--bg);
  border-color: var(--line);
  font-weight: 600;
}
.tabs__panel {
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
`,
  accordion: `
.accordion {
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--bg);
}
.accordion__item + .accordion__item {
  border-block-start: 1px solid var(--line);
}
.accordion__trigger {
  cursor: pointer;
  padding: var(--space-md);
  font-weight: 500;
}
.accordion__panel {
  padding: 0 var(--space-md) var(--space-md);
  color: var(--muted);
}
`,
  disclosure: `
.disclosure { display: grid; gap: var(--space-sm); }
.disclosure__trigger {
  font: inherit;
  min-height: 2.75rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  cursor: pointer;
  color: inherit;
  text-align: start;
}
.disclosure__panel {
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
}
.disclosure__panel[hidden] { display: none; }
`,
  command: `
.command {
  display: grid;
  gap: 0;
  max-width: 28rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
  overflow: hidden;
}
.command__input {
  font: inherit;
  width: 100%;
  min-height: 2.75rem;
  padding: 0.75rem 1rem;
  border: 0;
  border-block-end: 1px solid var(--line);
  background: transparent;
  color: inherit;
}
.command__list {
  list-style: none;
  margin: 0;
  padding: 0.25rem;
  max-height: 14rem;
  overflow: auto;
}
.command__list [role="option"] {
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  cursor: pointer;
}
.command__list [aria-selected="true"] {
  background: var(--surface);
}
`,
  wizard: `
.wizard {
  display: grid;
  gap: var(--space-md);
  max-width: 32rem;
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--bg);
}
.wizard__steps {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  list-style: none;
  margin: 0;
  padding: 0;
  color: var(--muted);
  font-size: 0.875rem;
}
.wizard__steps [aria-current="step"] {
  color: var(--ink);
  font-weight: 600;
}
.wizard__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
}
`,
  "help-panel": `
.help-panel {
  display: grid;
  gap: var(--space-sm);
  padding: var(--space-md);
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--surface);
  max-width: 22rem;
}
.help-panel h3 { margin: 0; font-size: 1rem; }
.help-panel p { margin: 0; color: var(--muted); }
`,
};

// Shared form control baseline for input-* atoms
const FORM_INPUT_BASE = `
.component--{name} label {
  display: grid;
  gap: var(--space-sm);
  max-width: 28rem;
}
.component--{name} input,
.component--{name} select,
.component--{name} textarea {
  font: inherit;
  width: 100%;
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: inherit;
}
`;

const FORM_ATOMS = [
  "input-text",
  "input-email",
  "input-password",
  "input-search",
  "input-number",
  "input-date",
  "input-time",
  "input-range",
  "textarea",
  "select",
];

function writeCss(name, body) {
  const title = name
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
  const css = `/* Component: ${title}
   Markup: components/${name}/${name}.html
   Barebones structure — customize freely.
*/

.component--${name} .demo {
  display: grid;
  gap: var(--space-md);
}

${body.trim()}
`;
  fs.writeFileSync(path.join(componentsDir, name, `${name}.css`), css);
}

let count = 0;
for (const name of listComponents()) {
  if (name === "form-field") continue;
  let body = STRUCTURE[name];
  if (!body && FORM_ATOMS.includes(name)) {
    body = FORM_INPUT_BASE.replaceAll("{name}", name);
  }
  if (!body) {
    body = `/* Add styles for .${name} here */\n.${name.replace(/-/g, "\\-") || name} {\n}\n`;
    // Prefer BEM root if class exists in convention
    body = `
/* Structural hook — extend .${name.split("-")[0]} / BEM roots as you style */
`;
  }
  if (fs.existsSync(path.join(componentsDir, name, `${name}.html`))) {
    writeCss(name, body);
    count += 1;
  }
}

// form-field shared CSS
fs.writeFileSync(
  path.join(componentsDir, "form-field", "form-field.css"),
  `/* Shared form control baseline
   Used by form atoms; not a packaged component.
*/

.form-field label {
  display: grid;
  gap: var(--space-sm);
  max-width: 28rem;
}

.form-field input,
.form-field select,
.form-field textarea,
.form-field button {
  font: inherit;
}

.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--bg);
  color: inherit;
}
`
);

console.log(`Applied structural CSS to ${count} components (+ form-field).`);
