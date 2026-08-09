/* AUTO-GENERATED from components/callout/callout.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<aside class=\"callout\" role=\"status\" data-tone=\"info\">\n      <div class=\"callout__body\">\n        <p class=\"callout__heading\">Info</p>\n        <p class=\"callout__text\">Highlighted message for the user.</p>\n      </div>\n      <button type=\"button\" class=\"callout__close\" aria-label=\"Dismiss\">×</button>\n    </aside>\n    <aside class=\"callout\" role=\"status\" data-tone=\"success\">\n      <div class=\"callout__body\">\n        <p class=\"callout__heading\">Success</p>\n        <p class=\"callout__text\">Changes saved.</p>\n      </div>\n    </aside>\n    <aside class=\"callout\" role=\"status\" data-tone=\"warning\">\n      <div class=\"callout__body\">\n        <p class=\"callout__heading\">Warning</p>\n        <p class=\"callout__text\">You are offline — edits will queue.</p>\n      </div>\n    </aside>\n    <aside class=\"callout\" role=\"alert\" data-tone=\"danger\">\n      <div class=\"callout__body\">\n        <p class=\"callout__heading\">Danger</p>\n        <p class=\"callout__text\">This action cannot be undone.</p>\n      </div>\n    </aside>\n    <aside class=\"callout\" role=\"status\" data-tone=\"neutral\">\n      <div class=\"callout__body\">\n        <p class=\"callout__heading\">Neutral</p>\n        <p class=\"callout__text\">Quiet continuity note.</p>\n      </div>\n    </aside>";

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
