import { Component, Input, forwardRef, ViewChild, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ImageMimeTypes } from '@constants';
import { AlertModalService } from '@services';

const IMAGE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ImageUploadComponent),
  multi: true,
};

@Component({
  selector: 'nj-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  providers: [
    IMAGE_ACCESSOR,
  ],
})

export class ImageUploadComponent implements ControlValueAccessor {

  @Input() acceptTypes: Array<string> = [ImageMimeTypes.JPEG, ImageMimeTypes.PNG];
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

    if (this.acceptTypes && this.acceptTypes.length > 0 && !this.acceptTypes.includes(fileItem.type)) {
      this.alertModalService.open({
        title: 'Please select JPG or PNG images.',
      });
      return;
    }

    // check file size (should be less than 512KB)
    // if (fileItem.size / 1024 > 512) {
    //   this.alertModalService.open({
    //     title: 'Please upload image which is less than 512KB.',
    //   });
    //   return;
    // }

    this.file = fileItem;
    this.onChange(this.file);
  }

  private resetInputValue() {
    if (this.input) {
      this.input.nativeElement.value = '';
    }
  }

  reset() {
    this.resetInputValue();
  }

  writeValue(value: any): void {
    // display image if the model is modified outside
  }

  triggerClick() {
    if (this.input) {
      this.resetInputValue();
      this.input.nativeElement.click();
    }
  }
}
