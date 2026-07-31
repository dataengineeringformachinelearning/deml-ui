/* AUTO-GENERATED from components/badge/badge.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<span class=\"badge\">Badge</span>\n    <span class=\"badge\" data-tone=\"success\">Success</span>\n    <span class=\"badge\" data-tone=\"warning\">Warning</span>\n    <span class=\"badge\" data-tone=\"danger\">Danger</span>";

@Component({
  selector: "deml-badge",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlBadge implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
