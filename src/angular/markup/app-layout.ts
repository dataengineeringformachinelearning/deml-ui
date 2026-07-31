/* AUTO-GENERATED from components/app-layout/app-layout.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"app-layout\">\n      <aside class=\"app-layout__nav\" aria-label=\"App navigation\">Nav</aside>\n      <div class=\"app-layout__main\">\n        <header class=\"app-layout__header\">Header</header>\n        <main class=\"app-layout__content\">Main content</main>\n      </div>\n      <aside class=\"app-layout__tools\" aria-label=\"Tools\">Tools</aside>\n    </div>";

@Component({
  selector: "deml-app-layout",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlAppLayout implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
