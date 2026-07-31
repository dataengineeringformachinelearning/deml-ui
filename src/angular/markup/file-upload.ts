/* AUTO-GENERATED from components/file-upload/file-upload.html — do not edit */
import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";

const DEML_TEMPLATE = "<div class=\"file-upload\">\n      <label class=\"file-upload__dropzone\" for=\"file-upload-input\">\n        <span class=\"file-upload__title\">Drop files here</span>\n        <span class=\"file-upload__hint\">or click to browse</span>\n        <input id=\"file-upload-input\" class=\"file-upload__input\" type=\"file\" multiple />\n      </label>\n      <ul class=\"file-upload__list\" aria-label=\"Selected files\"></ul>\n    </div>";

@Component({
  selector: "deml-file-upload",
  standalone: true,
  template: "",
  encapsulation: ViewEncapsulation.None,
})
export class DemlFileUpload implements OnInit {
  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;
    if (!el.hasChildNodes()) {
      el.innerHTML = DEML_TEMPLATE;
    }
  }
}
