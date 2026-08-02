/* AUTO-GENERATED from components/article/article.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"article\"><h1>Article title</h1><p>Body copy.</p></article>";

@Component({
  selector: "deml-article",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlArticle implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
