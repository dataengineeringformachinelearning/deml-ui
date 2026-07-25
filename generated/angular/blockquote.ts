/* AUTO-GENERATED from components/blockquote/blockquote.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<blockquote cite=\"https://example.com/quote\">\n      <p>A block quotation attributed to someone noteworthy.</p>\n      <footer>— <cite>Example Source</cite></footer>\n    </blockquote>";

@Component({
  selector: "deml-blockquote",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlBlockquote implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
