/* AUTO-GENERATED from components/article/article.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<article>\n      <header>\n        <h3>Article title</h3>\n        <p><time datetime=\"2026-07-25\">July 25, 2026</time></p>\n      </header>\n      <p>This <code>&lt;article&gt;</code> is a self-contained composition with <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code>.</p>\n      <footer>\n        <address>\n          Written by <a href=\"mailto:example@example.com\">Example Author</a><br>\n          123 Demo Street, Example City\n        </address>\n      </footer>\n    </article>";

@Component({
  selector: "deml-article",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlArticle implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
