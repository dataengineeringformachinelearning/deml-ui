/* AUTO-GENERATED from components/search/search.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<search>\n      <form role=\"search\" action=\"#\" method=\"get\">\n        <label for=\"site-search\">Search</label>\n        <input id=\"site-search\" type=\"search\" name=\"q\" placeholder=\"Search this page\">\n        <button type=\"submit\">Go</button>\n      </form>\n    </search>";

@Component({
  selector: "deml-search",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSearch implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
