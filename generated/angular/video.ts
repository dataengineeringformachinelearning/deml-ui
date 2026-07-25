/* AUTO-GENERATED from components/video/video.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<video controls width=\"320\" height=\"180\" preload=\"metadata\" poster=\"\">\n      <source src=\"https://www.w3schools.com/html/mov_bbb.mp4\" type=\"video/mp4\">\n      <track kind=\"captions\" src=\"\" srclang=\"en\" label=\"English\">\n      Your browser does not support the video element.\n    </video>";

@Component({
  selector: "deml-video",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlVideo implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
