# Headless API conventions

Small, consistent primitives. Consumers own all visuals.

## Composition

Every primitive is a **root** + **parts** (directives):

```html
<deml-menu [(open)]="open" (change)="…">
  <button demlMenuButton>…</button>
  <div demlMenuItems>
    <button demlMenuItem value="a">…</button>
  </div>
</deml-menu>
```

Put your own classes on hosts. The library never ships utility classes.

## State

| Concern | Pattern |
|---------|---------|
| Open/close | `open = model<boolean \| null>(null)` + `defaultOpen` → `isOpen` |
| Selection | `value = model<T \| null>(null)` + `defaultValue` → `selected` |
| Two-way | Prefer `model()` only — do **not** add a parallel `*Change` output |
| Rich events | Extra `change` output when payload is more than the model value |
| Lifecycle | `opened` / `closed` (`void`) on overlays |
| Host attrs | `data-state="open\|closed"` or `"active\|inactive"`; `data-disabled` when disabled |

## Events

| Name | When |
|------|------|
| `change` | Selection / activation with a typed payload (combobox, menu) |
| `opened` / `closed` | Overlay finished opening / closing |
| model `openChange` / `valueChange` | Automatic from `[(open)]` / `[(value)]` |

## Accessibility

- Follow WAI-ARIA APG patterns for the primitive
- Keyboard + focus management required for overlays and composite widgets
- Prefer native elements (`button`, `dialog`, `input`) under directives
- No color/spacing/motion in the package

## Naming

- Selectors: `deml-*` elements, `demlX` camelCase attributes
- Classes: `Deml*` 
- Tokens: `DEML_*`
- Import arrays: `DEML_*_IMPORTS`
