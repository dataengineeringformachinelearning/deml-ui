/* AUTO-GENERATED from components/image-map/image-map.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<img\n      src=\"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png\"\n      alt=\"Clickable regions\"\n      usemap=\"#logo-map\"\n      width=\"272\"\n      height=\"92\">\n    <map name=\"logo-map\">\n      <area\n        shape=\"rect\"\n        coords=\"0,0,136,92\"\n        href=\"https://www.google.com\"\n        alt=\"Left half\">\n      <area\n        shape=\"rect\"\n        coords=\"136,0,272,92\"\n        href=\"https://developer.mozilla.org\"\n        alt=\"Right half\">\n    </map>";

@Component({
  selector: "deml-image-map",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlImageMap implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
