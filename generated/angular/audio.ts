/* AUTO-GENERATED from components/audio/audio.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<audio controls preload=\"none\">\n      <source src=\"https://www.w3schools.com/html/horse.mp3\" type=\"audio/mpeg\">\n      <track kind=\"captions\" src=\"\" srclang=\"en\" label=\"English\">\n      Your browser does not support the audio element.\n    </audio>";

@Component({
  selector: "deml-audio",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlAudio implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
