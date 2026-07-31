/* AUTO-GENERATED from components/profile/profile.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"profile\">\n      <span class=\"avatar\" aria-hidden=\"true\"><span class=\"avatar__initials\">JD</span></span>\n      <div class=\"profile__text\">\n        <p class=\"profile__name\">Jane Doe</p>\n        <p class=\"profile__meta\">jane@example.com</p>\n      </div>\n    </div>";

@Component({
  selector: "deml-profile",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlProfile implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
