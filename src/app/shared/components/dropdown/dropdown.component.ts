import { Component, Input, forwardRef, EventEmitter, Output, OnChanges, HostListener, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true,
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    CUSTOM_VALUE_ACCESSOR,
  ],
})

export class DropdownComponent implements OnChanges, ControlValueAccessor {

  @ViewChild('dropdownEl') dropdownEl;

  @Input() data: Array<any>;
  @Input() valueProp = 'value';
  @Input() labelProp = 'label';

  // placeholder will be ignored if selectFirst is true
  @Input() selectFirst = false;
  @Input() placeholder = '';

  // if false, will return the selected object,
  // if true, will return the selected value
  @Input() outputAsValue = false;

  // utilities
  @Input() placement = 'bottom-left';
  @Input() mobileShowAsModal = false;

  @Output() select = new EventEmitter();

  selectedItem = null;

  constructor() { }

  ngOnChanges(changes: any) {
    this.data = changes.data.currentValue;
    this.refreshData();
  }

  @HostListener('focusout') focusout() {
    this.onTouched();
  }

  @HostListener('keyup.enter') closeFromPressEsc() {
    if (this.dropdownEl) {
      this.dropdownEl.toggle();
      this.onTouched();
    }
  }

  onChange = (_) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this.refreshData(value);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  refreshData(value?) {
    if (!this.data || this.data.length === 0) {
      return;
    }

    if (value) {
      if (this.outputAsValue) {
        this.selectedItem = this.data.find((item) => {
          const itemValue = this.getValue(item);
          return itemValue === value;
        });
      } else {
        this.selectedItem = value;
      }
    } else if (this.selectFirst) {
      this.selectedItem = this.data[0];
    } else {
      this.selectedItem = null;
    }
  }

  onSelectItem(item) {
    this.selectedItem = item;

    if (this.outputAsValue) {
      this.onChange(this.selectedItem[this.valueProp]);
    } else {
      this.onChange(this.selectedItem);
    }

    this.onTouched();
    this.select.emit(this.selectedItem);
  }

  getLabel(item) {
    if (typeof item === 'string' || typeof item === 'number') {
      return item;
    } else if (item && typeof item === 'object' && item.hasOwnProperty(this.labelProp)) {
      return item[this.labelProp];
    } else {
      return '';
    }
  }

  getValue(item) {
    if (typeof item === 'string' || typeof item === 'number') {
      return item;
    } else if (item && typeof item === 'object' && item.hasOwnProperty(this.valueProp)) {
      return item[this.valueProp];
    } else {
      return '';
    }
  }

  isActive(item) {
    if (!this.selectedItem) {
      return false;
    }

    if (typeof item === 'string' || typeof item === 'number') {
      return item === this.selectedItem;
    } else if (typeof item === 'object' && item.hasOwnProperty(this.valueProp)) {
      return item[this.valueProp] === this.selectedItem[this.valueProp];
    } else {
      return false;
    }
  }
}
