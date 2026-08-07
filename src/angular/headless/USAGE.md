# Headless usage

Unstyled Angular primitives (`deml-ui/angular`). Behavior + a11y only — you own CSS.

API rules: [CONVENTIONS.md](./CONVENTIONS.md).

| Primitive | Import | Parts |
|-----------|--------|-------|
| Tabs | `DEML_TABS_IMPORTS` | `[demlTabList]`, `[demlTab]`, `[demlTabPanel]` |
| Dialog | `DEML_DIALOG_IMPORTS` | `[demlDialogPanel]`, Title / Description / Close |
| Disclosure | `DEML_DISCLOSURE_IMPORTS` | `[demlDisclosureButton]`, `[demlDisclosurePanel]` |
| Menu | `DEML_MENU_IMPORTS` | `[demlMenuButton]`, `[demlMenuItems]`, `[demlMenuItem]` |
| Combobox | `DEML_COMBOBOX_IMPORTS` | Label / Input / Button / Options / Option |

Shared: `[(open)]` + `defaultOpen` → `isOpen`; `[(value)]` + `defaultValue` → `selected`. Rich payloads use `(change)`. Lifecycle: `(opened)` / `(closed)`. Host: `data-state`.

## Tabs

```ts
import { DEML_TABS_IMPORTS } from "deml-ui/angular";

// <deml-tabs [(value)]="tab">
//   <div demlTabList>… <button demlTab value="…">…</button>
//   <section demlTabPanel value="…">…</section>
```

## Dialog

Native `<dialog>` + focus trap. Portals to `document.body` by default (`[portal]="true"`).

```ts
import { DEML_DIALOG_IMPORTS } from "deml-ui/angular";

// <deml-dialog [(open)]="open">
//   <div demlDialogPanel>
//     <h2 demlDialogTitle>…</h2>
//     <p demlDialogDescription>…</p>
//     <button demlDialogClose>Cancel</button>
```

## Disclosure

```ts
import { DEML_DISCLOSURE_IMPORTS } from "deml-ui/angular";

// <deml-disclosure [(open)]="open">
//   <button demlDisclosureButton>…</button>
//   <div demlDisclosurePanel>…</div>
```

## Menu

```ts
import { DEML_MENU_IMPORTS, type DemlMenuChangeEvent } from "deml-ui/angular";

// <deml-menu [(open)]="open" (change)="onChange($event)">
//   <button demlMenuButton>…</button>
//   <div demlMenuItems>
//     <button demlMenuItem value="edit">Edit</button>
```

`(change)` payload: `{ value, label }` (`DemlMenuChangeEvent`).

## Combobox

Editable combobox + listbox. You filter options; the primitive owns open/active/selected + keyboard.

```ts
import { DEML_COMBOBOX_IMPORTS } from "deml-ui/angular";

// <deml-combobox [(value)]="value" [(query)]="query" [(open)]="open">
//   <label demlComboboxLabel>…</label>
//   <input demlComboboxInput />
//   <button demlComboboxButton aria-label="Toggle">…</button>
//   <ul demlComboboxOptions>
//     <li demlComboboxOption [value]="item">{{ item }}</li>
```
