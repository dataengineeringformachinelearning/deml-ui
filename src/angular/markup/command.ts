/* AUTO-GENERATED from components/command/command.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"command\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Command palette\">\n      <input class=\"command__input\" type=\"search\" placeholder=\"Type a command…\" aria-controls=\"command-list\" />\n      <ul id=\"command-list\" class=\"command__list\" role=\"listbox\">\n        <li role=\"option\" aria-selected=\"true\">Go to dashboard</li>\n        <li role=\"option\">Open settings</li>\n        <li role=\"option\">Sign out</li>\n      </ul>\n    </div>";

@Component({
  selector: "deml-command",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlCommand implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
