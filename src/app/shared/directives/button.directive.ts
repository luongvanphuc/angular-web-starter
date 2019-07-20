import { Directive, Input, OnChanges, Renderer2, ElementRef, SimpleChanges, HostBinding } from '@angular/core';

@Directive({
  selector: 'button[appButton]',
})
export class ButtonDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('appButton') isLoading: boolean;
  @Input() autoRelease = true;
  @Input() submittedText = 'Submitted'; // only if autoRelease = false

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  @HostBinding('class.btn-loading') get loading() { return this.isLoading; }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isLoading && changes.isLoading.firstChange) {
      return;
    }

    this.setStatus();
  }

  private setStatus() {
    if (this.isLoading) {
      this.disableButton();
    } else if (this.autoRelease) {
      this.releaseButton();
    } else {
      this.finishLoading();
    }
  }

  private disableButton() {
    if (this.elementRef && this.elementRef.nativeElement) {
      // disable the button to prevent multiple click
      this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', 'disabled');

      // trick to hide the button text but keep the button width
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'transparent');
    }
  }

  private releaseButton() {
    if (this.elementRef && this.elementRef.nativeElement) {
      this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
      this.renderer.removeStyle(this.elementRef.nativeElement, 'color');
    }
  }

  private finishLoading() {
    if (this.elementRef && this.elementRef.nativeElement) {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'color');
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', this.submittedText);
    }
  }
}
