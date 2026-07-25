/* AUTO-GENERATED from components/meter/meter.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<label for=\"meter-field\">Meter</label>\n    <meter id=\"meter-field\" min=\"0\" max=\"100\" low=\"30\" high=\"70\" optimum=\"80\" value=\"65\">65</meter>";

@Component({
  selector: "deml-meter",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlMeter implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
