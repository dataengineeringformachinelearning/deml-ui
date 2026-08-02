/* AUTO-GENERATED from components/checkbox-field/checkbox-field.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<label class=\"checkbox-field\"><input type=\"checkbox\" /><span>Remember me</span></label>";

@Component({
  selector: "deml-checkbox-field",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlCheckboxField implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
