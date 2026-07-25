/* AUTO-GENERATED from components/iframe/iframe.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<iframe\n      title=\"Example embed\"\n      src=\"https://example.com\"\n      width=\"100%\"\n      height=\"160\"\n      loading=\"lazy\"></iframe>";

@Component({
  selector: "deml-iframe",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlIframe implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
