/* AUTO-GENERATED from components/image/image.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<figure>\n      <img\n        src=\"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png\"\n        alt=\"Google logo\"\n        width=\"272\"\n        height=\"92\">\n      <figcaption>An image inside a figure with a caption.</figcaption>\n    </figure>";

@Component({
  selector: "deml-image",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlImage implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
