/* AUTO-GENERATED from components/flashbar/flashbar.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<ul class=\"flashbar\" aria-label=\"Notifications\">\n      <li class=\"flashbar__item\" data-tone=\"info\">\n        <p class=\"flashbar__message\">Informational notice.</p>\n        <button type=\"button\" class=\"flashbar__dismiss\" aria-label=\"Dismiss\">×</button>\n      </li>\n      <li class=\"flashbar__item\" data-tone=\"warning\">\n        <p class=\"flashbar__message\">Warning notice.</p>\n        <button type=\"button\" class=\"flashbar__dismiss\" aria-label=\"Dismiss\">×</button>\n      </li>\n    </ul>";

@Component({
  selector: "deml-flashbar",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlFlashbar implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
