/* AUTO-GENERATED from components/radio-team/radio-team.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label><input type=\"radio\" name=\"radio-team\" value=\"team\"> Team</label>";

@Component({
  selector: "deml-radio-team",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlRadioTeam implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
