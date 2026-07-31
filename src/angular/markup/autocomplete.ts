/* AUTO-GENERATED from components/autocomplete/autocomplete.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"autocomplete\">\n      <label for=\"autocomplete-input\">Fruit</label>\n      <input id=\"autocomplete-input\" type=\"text\" name=\"fruit\" autocomplete=\"off\" aria-autocomplete=\"list\" aria-controls=\"autocomplete-list\" aria-expanded=\"true\" />\n      <ul id=\"autocomplete-list\" class=\"autocomplete__list\" role=\"listbox\">\n        <li role=\"option\" aria-selected=\"true\">Apple</li>\n        <li role=\"option\">Apricot</li>\n        <li role=\"option\">Avocado</li>\n      </ul>\n    </div>";

@Component({
  selector: "deml-autocomplete",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlAutocomplete implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
