/* AUTO-GENERATED from components/edits/edits.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<p>\n      <del datetime=\"2026-07-01\">removed text</del>\n      <ins datetime=\"2026-07-25\">inserted text</ins>\n    </p>";

@Component({
  selector: "deml-edits",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlEdits implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
