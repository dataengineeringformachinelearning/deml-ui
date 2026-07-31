/* AUTO-GENERATED from components/activity-list/activity-list.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<ul class=\"activity-list\" aria-label=\"Recent activity\">\n      <li class=\"activity-list__item\">\n        <time datetime=\"2026-07-30T12:00:00Z\">12:00</time>\n        <p class=\"activity-list__title\">Deploy completed</p>\n        <p class=\"activity-list__meta\">production</p>\n      </li>\n      <li class=\"activity-list__item\">\n        <time datetime=\"2026-07-30T11:40:00Z\">11:40</time>\n        <p class=\"activity-list__title\">Config updated</p>\n        <p class=\"activity-list__meta\">settings</p>\n      </li>\n    </ul>";

@Component({
  selector: "deml-activity-list",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlActivityList implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
