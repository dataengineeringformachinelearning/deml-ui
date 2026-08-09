/* AUTO-GENERATED from components/input-text/input-text.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label class=\"text-field\" for=\"input-text-field\">\n      <span class=\"text-field__label\">Name</span>\n      <input\n        id=\"input-text-field\"\n        class=\"text-field__control\"\n        name=\"name\"\n        type=\"text\"\n        placeholder=\"Your name\"\n        autocomplete=\"name\"\n      />\n    </label>";

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
