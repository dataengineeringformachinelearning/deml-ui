/* AUTO-GENERATED from components/article/article.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<article class=\"article\">\n      <div class=\"article-body\">\n        <h2>Section title</h2>\n        <p>Body copy for long-form reading — paragraphs, lists, and code.</p>\n        <ul>\n          <li>First point</li>\n          <li>Second point</li>\n        </ul>\n        <pre><code>npm run build</code></pre>\n      </div>\n    </article>";

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
