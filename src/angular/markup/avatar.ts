/* AUTO-GENERATED from components/avatar/avatar.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<span class=\"avatar\" aria-label=\"Ada Lovelace\">\n      <span class=\"avatar__initials\" aria-hidden=\"true\">AL</span>\n    </span>\n    <span class=\"avatar\" aria-label=\"User photo\">\n      <img class=\"avatar__image\" src=\"\" alt=\"\" width=\"40\" height=\"40\" />\n    </span>";

@Component({
  selector: "deml-avatar",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlAvatar implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
