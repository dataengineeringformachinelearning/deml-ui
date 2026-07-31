/* AUTO-GENERATED from components/radio-group/radio-group.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<fieldset class=\"radio-group\">\n      <legend class=\"radio-group__legend\">Plan</legend>\n      <label class=\"radio-group__option\"><input type=\"radio\" name=\"plan\" value=\"free\" /> Free</label>\n      <label class=\"radio-group__option\"><input type=\"radio\" name=\"plan\" value=\"pro\" checked /> Pro</label>\n      <label class=\"radio-group__option\"><input type=\"radio\" name=\"plan\" value=\"team\" /> Team</label>\n    </fieldset>";

@Component({
  selector: "deml-radio-group",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlRadioGroup implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
