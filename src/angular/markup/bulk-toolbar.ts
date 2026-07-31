/* AUTO-GENERATED from components/bulk-toolbar/bulk-toolbar.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"bulk-toolbar\" role=\"toolbar\" aria-label=\"Bulk actions\">\n      <span class=\"bulk-toolbar__count\">3 selected</span>\n      <button type=\"button\">Archive</button>\n      <button type=\"button\">Delete</button>\n      <button type=\"button\">Clear selection</button>\n    </div>";

@Component({
  selector: "deml-bulk-toolbar",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlBulkToolbar implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
