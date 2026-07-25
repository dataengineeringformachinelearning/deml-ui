/* AUTO-GENERATED from components/checkbox-updates/checkbox-updates.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label><input type=\"checkbox\" name=\"features\" value=\"updates\" checked> Updates</label>";

@Component({
  selector: "deml-checkbox-updates",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlCheckboxUpdates implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
