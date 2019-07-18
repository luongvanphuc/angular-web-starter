import { Component, Input, forwardRef, HostListener, ViewChild, HostBinding, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

const CUSTOM_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatepickerComponent),
  multi: true,
};

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    CUSTOM_VALUE_ACCESSOR,
  ],
})

export class DatepickerComponent implements ControlValueAccessor {
  @ViewChild('dpElement') dpElement;

  // placeholder will be ignored if selectFirst is true
  @Input() placeholder = '';
  @Input() name: any;
  @Input() startDate: NgbDate;
  @Input() minDate: NgbDate;
  @Input() maxDate: NgbDate;
  @Input() required = false;
  @Input() disabled = false;
  @Input() tabindex = 0;

  value: any;
  private isClicked = false;

  @HostListener('focusout') focusout() {
    if (this.dpElement && this.isClicked) {
      this.onTouched();
      this.isClicked = false;
    }
  }

  @HostListener('blur') blur() {
    this.onTouched();
  }

  @HostBinding('attr.tabindex') get valid() { return this.tabindex; }

  @HostListener('keyup.enter') pressEnter() {
    this.toggle();
  }

  toggle() {
    if (this.dpElement) {
      this.dpElement.toggle();

      setTimeout(() => {
        this.isClicked = true;
      });
    }
  }

  onChange = (_) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this.value = typeof value === 'string' ?
      new Date(value) :
      value;

    this.onChange(this.value);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
