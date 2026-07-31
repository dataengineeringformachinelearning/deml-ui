/* AUTO-GENERATED from components/empty-state/empty-state.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"empty-state\" role=\"status\">\n      <p class=\"empty-state__eyebrow\">Empty</p>\n      <p class=\"empty-state__title\">No items yet</p>\n      <p class=\"empty-state__description\">Create your first item to get started.</p>\n      <div class=\"empty-state__actions\">\n        <button type=\"button\">Create item</button>\n      </div>\n    </div>";

@Component({
  selector: "deml-empty-state",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlEmptyState implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
