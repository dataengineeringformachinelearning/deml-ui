/* AUTO-GENERATED from components/dropdown/dropdown.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"dropdown\">\n      <button type=\"button\" class=\"dropdown__trigger\" aria-haspopup=\"menu\" aria-expanded=\"false\" aria-controls=\"dropdown-menu\">Actions</button>\n      <ul id=\"dropdown-menu\" class=\"dropdown__menu\" role=\"menu\" hidden>\n        <li role=\"none\"><button type=\"button\" role=\"menuitem\">Edit</button></li>\n        <li role=\"none\"><button type=\"button\" role=\"menuitem\">Duplicate</button></li>\n        <li role=\"none\"><button type=\"button\" role=\"menuitem\">Delete</button></li>\n      </ul>\n    </div>";

@Component({
  selector: "deml-dropdown",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlDropdown implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
