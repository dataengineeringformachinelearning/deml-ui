/* AUTO-GENERATED from components/page-shell/page-shell.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"page-shell\">\n      <div class=\"page-shell__inner\">\n        <p>Constrained page canvas content.</p>\n      </div>\n    </div>";

@Component({
  selector: "deml-page-shell",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPageShell implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
