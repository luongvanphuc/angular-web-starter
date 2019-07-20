import { Component, AfterViewInit, Input, forwardRef, ViewChild, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchCheckboxComponent),
  multi: true,
};

@Component({
  selector: 'nj-switch-checkbox',
  templateUrl: './switch-checkbox.component.html',
  styleUrls: ['./switch-checkbox.component.scss'],
  providers: [
    CUSTOM_VALUE_ACCESSOR,
  ],
})

export class SwitchCheckboxComponent implements OnChanges, AfterViewInit, ControlValueAccessor {
  @Input() disabled = false;
  @Input() checked = false;

  @ViewChild('checkbox', { static: true }) checkbox: any;

  constructor() { }

  onChange = (_) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this.checked = value;
    this.setValue(this.checked);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  ngAfterViewInit() {
    this.setValue(this.checked);
    this.setDisabled(this.disabled);
  }

  ngOnChanges(changes: any) {
    if (changes.disabled) {
      this.setDisabled(changes.disabled.currentValue);
    }
  }

  setValue(value) {
    this.checkbox.nativeElement.checked = value;
  }

  setDisabled(disabled) {
    this.checkbox.nativeElement.disabled = disabled;
  }
}
