/* AUTO-GENERATED from components/navbar/navbar.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from "@angular/core";

const DEML_TEMPLATE = "<nav class=\"navbar\" aria-label=\"Primary\">\n  <div class=\"navbar__inner\">\n    <a class=\"navbar__brand\" href=\"/\">deml</a>\n\n    <ul class=\"navbar__links\">\n      <li><a href=\"#components\">Components</a></li>\n      <li><a href=\"#article\">Article</a></li>\n      <li><a href=\"#headings\">Headings</a></li>\n      <li><a href=\"#paragraph\">Paragraph</a></li>\n      <li><a href=\"#unordered-list\">Lists</a></li>\n      <li><a href=\"#table\">Table</a></li>\n      <li><a href=\"#image\">Image</a></li>\n      <li><a href=\"#input-text\">Inputs</a></li>\n      <li><a href=\"#megaform\">Megaform</a></li>\n      <li><a href=\"#details\">Details</a></li>\n      <li><a href=\"#template\">Template</a></li>\n    </ul>\n  </div>\n</nav>";

@Component({
  selector: "deml-navbar",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlNavbar implements OnInit {
  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
