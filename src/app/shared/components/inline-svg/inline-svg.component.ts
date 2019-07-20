import { Component, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inline-svg',
  template: '<ng-content></ng-content>',
  styles: [':host { line-height: 0 }'],
})
export class InlineSVGComponent implements OnInit {
  @Input() src: string;
  @Input() display = 'inline-block';
  @Input() fill: string;
  @Input() width: string;
  @Input() height: string;

  private svgContent: string;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', this.display);

    if (this.src) {
      this.http.get(this.src, {
        responseType: 'text',
      }).subscribe((data) => {
        this.svgContent = data;
        this.paint();
      }, () => {
        // invalid src path
        this.reset();
      });
    }
  }

  private reset() {
    this.elementRef.nativeElement.innerHTML = '';
  }

  private paint() {
    this.reset();

    const element = this.elementRef.nativeElement;
    element.innerHTML = this.svgContent;

    if (!this.fill && !this.width) {
      return;
    }

    const svg = element.querySelector('svg');

    if (svg) {
      if (this.fill) {
        this.renderer2.setStyle(svg, 'fill', this.fill);
      }

      if (this.width) {
        this.renderer2.setStyle(svg, 'width', this.width);
      }

      if (this.height) {
        this.renderer2.setStyle(svg, 'height', this.height);
      }
    }
  }
}
