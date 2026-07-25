/* AUTO-GENERATED from components/bidirectional/bidirectional.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<p>\n      Bidirectional text:\n      <bdi>مرحبا</bdi>\n      and\n      <bdo dir=\"rtl\">forced RTL</bdo>.\n    </p>\n    <p>Line break here:<br>new line. <span>Span wrapper</span>.</p>\n    <hr>";

@Component({
  selector: "deml-bidirectional",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlBidirectional implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
