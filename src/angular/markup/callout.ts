/* AUTO-GENERATED from components/callout/callout.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<aside class=\"callout\" role=\"status\" data-tone=\"info\">\n      <div class=\"callout__body\">\n        <p class=\"callout__heading\">Callout heading</p>\n        <p class=\"callout__text\">Highlighted message for the user.</p>\n      </div>\n      <button type=\"button\" class=\"callout__close\" aria-label=\"Dismiss\">×</button>\n    </aside>";

@Component({
  selector: "deml-callout",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlCallout implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
