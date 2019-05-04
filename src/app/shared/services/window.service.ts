import { Injectable } from '@angular/core';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class WindowRef {
  get nativeWindow(): any {
    return _window();
  }

  openUrl(url: string) {
    this.nativeWindow.location.href = url;
  }

  openNewTab(url: string) {
    this.nativeWindow.open(url, '_blank');
  }
}
