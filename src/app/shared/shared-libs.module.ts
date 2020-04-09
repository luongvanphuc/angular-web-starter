import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    RouterModule,
    NgxWebstorageModule.forRoot({ prefix: 'app', separator: '-', caseSensitive: true }),
  ],
  providers: [
  ],
  exports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxWebstorageModule,
    NgSelectModule,
  ],
})
export class SharedLibsModule { }
