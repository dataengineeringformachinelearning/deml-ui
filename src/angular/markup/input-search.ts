/* AUTO-GENERATED from components/input-search/input-search.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-search-field\">Search</label>\n    <input id=\"input-search-field\" name=\"search\" type=\"search\" placeholder=\"Search…\">";

@Component({
  selector: "deml-input-search",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputSearch implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
