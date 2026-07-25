/* AUTO-GENERATED from components/details/details.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<details open>\n      <summary>Details / summary (open)</summary>\n      <p>Expandable disclosure content.</p>\n    </details>";

@Component({
  selector: "deml-details",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlDetails implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
