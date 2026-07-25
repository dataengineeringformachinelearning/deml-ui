/* AUTO-GENERATED from components/picture/picture.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<picture>\n      <source\n        media=\"(min-width: 600px)\"\n        srcset=\"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\">\n      <img\n        src=\"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png\"\n        alt=\"Responsive Google logo\">\n    </picture>";

@Component({
  selector: "deml-picture",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlPicture implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
