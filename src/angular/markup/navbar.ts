/* AUTO-GENERATED from components/navbar/navbar.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<header class=\"site-navbar\"><div class=\"site-navbar-branding\"><a class=\"site-navbar-icon\" href=\"#\">DEML</a></div><nav class=\"main-navigation\"><ul><li><a href=\"#\">Home</a></li></ul></nav></header>";

@Component({
  selector: "deml-navbar",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlNavbar implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
