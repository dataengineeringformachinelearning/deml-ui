/* AUTO-GENERATED from components/input-text/input-text.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"input-text-field\">Name</label>\n    <input id=\"input-text-field\" name=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"name\" required>";

@Component({
  selector: "deml-input-text",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlInputText implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
