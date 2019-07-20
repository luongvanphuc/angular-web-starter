import { Component, Input, forwardRef, ViewChild, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AlertModalService } from '@services';

const FILE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FileUploadComponent),
  multi: true,
};

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  providers: [
    FILE_ACCESSOR,
  ],
})

export class FileUploadComponent implements ControlValueAccessor {

  @Input() acceptTypes: Array<string>;
  @ViewChild('input', { static: true }) input;

  file: File = null;

  onChange = (_) => { };
  onTouched = () => { };
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor(
    private alertModalService: AlertModalService,
  ) { }

  @HostListener('click', ['$event.target'])
  click() {
    this.triggerClick();
  }

  handleFileInput(files: FileList) {
    const fileItem = files.item(0);

    // check file size (should be less than 2MB)
    // if (fileItem.size / 1024 > 2048) {
    //   this.alertModalService.open({
    //     title: 'Please upload file which is less than 2MB.',
    //   });
    //   return;
    // }

    if (this.acceptTypes && this.acceptTypes.length > 0 && !this.acceptTypes.includes(fileItem.type)) {
      this.alertModalService.open({
        title: 'File type is not supported.',
      });
      return;
    }

    this.file = fileItem;
    this.onChange(this.file);
  }

  private resetInputValue() {
    if (this.input) {
      this.input.nativeElement.value = '';
    }
  }

  writeValue(value: any): void {
    // display image if the model is modified outside
  }

  reset() {
    this.resetInputValue();
  }

  triggerClick() {
    if (this.input) {
      this.resetInputValue();
      this.input.nativeElement.click();
    }
  }
}
