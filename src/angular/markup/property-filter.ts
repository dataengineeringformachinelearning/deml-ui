/* AUTO-GENERATED from components/property-filter/property-filter.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"property-filter\">\n      <label for=\"property-filter-input\">Filter</label>\n      <div class=\"property-filter__control\">\n        <ul class=\"property-filter__tokens\" aria-label=\"Active filters\">\n          <li class=\"property-filter__token\">status = active <button type=\"button\" aria-label=\"Remove\">×</button></li>\n        </ul>\n        <input id=\"property-filter-input\" type=\"search\" placeholder=\"Filter properties…\" />\n      </div>\n    </div>";

@Component({
  selector: "deml-property-filter",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPropertyFilter implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
