# Headless usage

Unstyled Angular primitives (`deml-ui/angular`). Behavior + a11y only — you own all CSS.

API rules: see [CONVENTIONS.md](./CONVENTIONS.md).

| Primitive | Root | Parts |
|-----------|------|-------|
| Tabs | `deml-tabs` | `[demlTabList]`, `[demlTab]`, `[demlTabPanel]` |
| Dialog | `deml-dialog` | `[demlDialogPanel]`, Title / Description / Close |
| Disclosure | `deml-disclosure` | `[demlDisclosureButton]`, `[demlDisclosurePanel]` |
| Menu | `deml-menu` | `[demlMenuButton]`, `[demlMenuItems]`, `[demlMenuItem]` |
| Combobox | `deml-combobox` | Label / Input / Button / Options / Option |

Shared models: `[(open)]` + `defaultOpen` → `isOpen`; `[(value)]` + `defaultValue` → `selected`.
Rich selection payloads use `(change)`. Lifecycle: `(opened)` / `(closed)`.

## Tabs

```ts
import { Component, signal } from "@angular/core";
import { DEML_TABS_IMPORTS } from "deml-ui/angular";

@Component({
  standalone: true,
  imports: [...DEML_TABS_IMPORTS],
  template: `
    <deml-tabs [(value)]="tab">
      <div demlTabList aria-label="Settings" class="tabs__list">
        <button type="button" demlTab value="profile" class="tabs__tab">Profile</button>
        <button type="button" demlTab value="billing" class="tabs__tab">Billing</button>
      </div>
      <section demlTabPanel value="profile" class="tabs__panel">Profile content</section>
      <section demlTabPanel value="billing" class="tabs__panel">Billing content</section>
    </deml-tabs>
  `,
  styles: [
    `
      .tabs__list { display: flex; gap: 0.5rem; }
      .tabs__tab[data-state="active"] { font-weight: 600; text-decoration: underline; }
      .tabs__panel { margin-block-start: 1rem; }
    `,
  ],
})
export class SettingsTabs {
  readonly tab = signal("profile");
}
```

## Dialog

Native `<dialog>` + focus trap. Portals to `document.body` by default.

```ts
import { Component, model } from "@angular/core";
import { DEML_DIALOG_IMPORTS } from "deml-ui/angular";

@Component({
  standalone: true,
  imports: [...DEML_DIALOG_IMPORTS],
  template: `
    <button type="button" class="button" (click)="open.set(true)">Delete</button>

    <deml-dialog [(open)]="open" [portal]="true">
      <div demlDialogPanel class="modal">
        <h2 demlDialogTitle class="modal__title">Delete item?</h2>
        <p demlDialogDescription class="modal__body">This cannot be undone.</p>
        <div class="modal__actions">
          <button type="button" demlDialogClose class="button">Cancel</button>
          <button type="button" class="button button--danger" (click)="confirm()">
            Delete
          </button>
        </div>
      </div>
    </deml-dialog>
  `,
  styles: [
    `
      dialog {
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 0;
        max-width: 24rem;
      }
      dialog::backdrop { background: rgb(0 0 0 / 40%); }
      .modal { display: grid; gap: 0.75rem; padding: 1.25rem; }
      .modal__actions { display: flex; justify-content: flex-end; gap: 0.5rem; }
    `,
  ],
})
export class DeleteDialog {
  readonly open = model(false);
  confirm(): void {
    this.open.set(false);
  }
}
```

## Disclosure

```ts
import { Component, model } from "@angular/core";
import { DEML_DISCLOSURE_IMPORTS } from "deml-ui/angular";

@Component({
  standalone: true,
  imports: [...DEML_DISCLOSURE_IMPORTS],
  template: `
    <deml-disclosure [(open)]="open">
      <button type="button" demlDisclosureButton class="disclosure__trigger">
        {{ open() ? "Hide" : "Show" }} details
      </button>
      <div demlDisclosurePanel class="disclosure__panel">Extra details…</div>
    </deml-disclosure>
  `,
  styles: [
    `
      .disclosure__trigger { cursor: pointer; }
      .disclosure__panel[data-state="open"] { margin-block-start: 0.5rem; }
    `,
  ],
})
export class DetailsDisclosure {
  readonly open = model(false);
}
```

## Menu

```ts
import { Component, model } from "@angular/core";
import { DEML_MENU_IMPORTS, type DemlMenuChangeEvent } from "deml-ui/angular";

@Component({
  standalone: true,
  imports: [...DEML_MENU_IMPORTS],
  template: `
    <deml-menu [(open)]="open" (change)="onChange($event)">
      <button type="button" demlMenuButton class="menu__trigger">Actions</button>
      <div demlMenuItems class="menu__panel">
        <button type="button" demlMenuItem value="edit" class="menu__item">Edit</button>
        <button type="button" demlMenuItem value="duplicate" class="menu__item">Duplicate</button>
        <button type="button" demlMenuItem value="delete" class="menu__item">Delete</button>
        <button type="button" demlMenuItem disabled class="menu__item">Archive</button>
      </div>
    </deml-menu>
  `,
  styles: [
    `
      .menu__trigger { min-height: 2.75rem; padding: 0.5rem 1rem; }
      .menu__panel {
        position: absolute;
        margin: 0.25rem 0 0;
        padding: 0.25rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        background: #fff;
        min-width: 10rem;
      }
      .menu__panel[hidden] { display: none; }
      .menu__item {
        display: block; width: 100%; text-align: start;
        padding: 0.5rem 0.75rem; border: 0; background: transparent; cursor: pointer;
      }
      .menu__item[data-active] { background: #eee; }
      .menu__item[data-disabled] { opacity: 0.5; cursor: not-allowed; }
    `,
  ],
})
export class ActionsMenu {
  readonly open = model(false);
  onChange(event: DemlMenuChangeEvent): void {
    console.log(event.value, event.label);
  }
}
```

## Combobox

Editable combobox with listbox popup. You filter options; the primitive owns open/active/selected + keyboard.

```ts
import { Component, computed, model, signal } from "@angular/core";
import { DEML_COMBOBOX_IMPORTS } from "deml-ui/angular";

@Component({
  standalone: true,
  imports: [...DEML_COMBOBOX_IMPORTS],
  template: `
    <deml-combobox [(value)]="value" [(query)]="query" [(open)]="open">
      <label demlComboboxLabel class="combo__label">Fruit</label>
      <div class="combo__control">
        <input demlComboboxInput class="combo__input" placeholder="Search…" />
        <button type="button" demlComboboxButton class="combo__button" aria-label="Toggle">
          ▾
        </button>
      </div>
      <ul demlComboboxOptions class="combo__list">
        @for (item of filtered(); track item) {
          <li demlComboboxOption [value]="item" class="combo__option">{{ item }}</li>
        } @empty {
          <li class="combo__empty" role="presentation">No matches</li>
        }
      </ul>
    </deml-combobox>
  `,
  styles: [
    `
      .combo__control { display: flex; gap: 0.25rem; }
      .combo__input { flex: 1; min-height: 2.75rem; }
      .combo__list[data-state="closed"],
      .combo__list[hidden] { display: none; }
      .combo__list {
        list-style: none; margin: 0.25rem 0 0; padding: 0.25rem;
        border: 1px solid #ccc; border-radius: 0.5rem;
      }
      .combo__option { padding: 0.5rem 0.75rem; cursor: pointer; }
      .combo__option[data-active] { background: #eee; }
      .combo__option[data-selected] { font-weight: 600; }
    `,
  ],
})
export class FruitCombobox {
  readonly items = signal(["Apple", "Apricot", "Avocado", "Banana", "Blueberry"]);
  readonly value = model<string | null>(null);
  readonly query = model("");
  readonly open = model(false);

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const all = this.items();
    return q ? all.filter((i) => i.toLowerCase().includes(q)) : all;
  });
}
```
