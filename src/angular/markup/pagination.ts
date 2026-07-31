/* AUTO-GENERATED from components/pagination/pagination.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<nav class=\"pagination\" aria-label=\"Pagination\">\n      <button type=\"button\" class=\"pagination__prev\" aria-label=\"Previous page\">Previous</button>\n      <ul class=\"pagination__pages\">\n        <li><button type=\"button\" aria-current=\"page\">1</button></li>\n        <li><button type=\"button\">2</button></li>\n        <li><button type=\"button\">3</button></li>\n      </ul>\n      <button type=\"button\" class=\"pagination__next\" aria-label=\"Next page\">Next</button>\n    </nav>";

@Component({
  selector: "deml-pagination",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPagination implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
