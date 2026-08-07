/* AUTO-GENERATED from components/text-field/text-field.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label class=\"text-field\"><span class=\"text-field__label\">Name</span><input class=\"text-field__control\" type=\"text\" /></label>";

@Component({
  selector: "deml-text-field",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlTextField implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
