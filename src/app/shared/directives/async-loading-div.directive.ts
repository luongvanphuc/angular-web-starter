import { Directive, Input, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Directive({
  selector: 'div[appAsyncLoadingDiv]',
})
export class AsyncLoadingDivDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('appAsyncLoadingDiv') isLoading: boolean;
  @Input() centerSpinner = true;

  @HostBinding('class.async-loading-div') get loading() { return this.isLoading; }
  @HostBinding('class.text-center') get center() { return this.centerSpinner; }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isLoading && changes.isLoading.firstChange) {
      return;
    }
  }
}
