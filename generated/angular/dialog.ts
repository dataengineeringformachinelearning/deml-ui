/* AUTO-GENERATED from components/dialog/dialog.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<button type=\"button\" id=\"open-dialog\">Open dialog</button>\n    <dialog id=\"demo-dialog\">\n      <form method=\"dialog\">\n        <h3>Dialog</h3>\n        <p>Native modal dialog element.</p>\n        <button value=\"cancel\">Close</button>\n        <button value=\"confirm\">Confirm</button>\n      </form>\n    </dialog>";

@Component({
  selector: "deml-dialog",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlDialog implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
