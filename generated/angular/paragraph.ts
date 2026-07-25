/* AUTO-GENERATED from components/paragraph/paragraph.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<p>\n      A paragraph with\n      <a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Element\" target=\"_blank\" rel=\"noopener noreferrer\">a link</a>,\n      <em>emphasis</em>,\n      <strong>strong</strong>,\n      <small>small</small>,\n      <s>strikethrough</s>,\n      <u>underline</u>,\n      <mark>highlighted</mark>,\n      <b>bold</b>,\n      <i>italic</i>,\n      <abbr title=\"HyperText Markup Language\">HTML</abbr>,\n      <cite>Cited Title</cite>,\n      <q cite=\"https://example.com\">a short quotation</q>,\n      <dfn>definition</dfn>,\n      <code>inline code</code>,\n      <var>x</var>,\n      <samp>sample output</samp>,\n      <kbd>Ctrl</kbd>+<kbd>C</kbd>,\n      H<sub>2</sub>O,\n      E=mc<sup>2</sup>,\n      <data value=\"123\">one hundred twenty-three</data>,\n      and a soft wrap opportunity: supercalifragilisticexpiali<wbr>docious.\n    </p>";

@Component({
  selector: "deml-paragraph",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlParagraph implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
