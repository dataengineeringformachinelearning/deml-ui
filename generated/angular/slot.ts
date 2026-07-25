/* AUTO-GENERATED from components/slot/slot.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<p><slot>Fallback for shadow DOM <code>&lt;slot&gt;</code> (shown as normal content outside a shadow root).</slot></p>";

@Component({
  selector: "deml-slot",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlSlot implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
