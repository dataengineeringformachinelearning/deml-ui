/* AUTO-GENERATED from components/timeline/timeline.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<ol class=\"timeline\">\n      <li class=\"timeline__item\">\n        <time datetime=\"2026-07-01\">Jul 1</time>\n        <p class=\"timeline__title\">Created</p>\n        <p class=\"timeline__description\">Resource was created.</p>\n      </li>\n      <li class=\"timeline__item\">\n        <time datetime=\"2026-07-15\">Jul 15</time>\n        <p class=\"timeline__title\">Updated</p>\n        <p class=\"timeline__description\">Configuration changed.</p>\n      </li>\n    </ol>";

@Component({
  selector: "deml-timeline",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlTimeline implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
