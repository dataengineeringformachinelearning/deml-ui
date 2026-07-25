/* AUTO-GENERATED from components/menu/menu.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<menu>\n      <li><button type=\"button\">Cut</button></li>\n      <li><button type=\"button\">Copy</button></li>\n      <li><button type=\"button\">Paste</button></li>\n    </menu>";

@Component({
  selector: "deml-menu",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlMenu implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
