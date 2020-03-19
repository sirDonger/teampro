import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from './error.component';
import { NoAccessComponent } from './no-access.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorComponent,
    NoAccessComponent,
    PageNotFoundComponent
  ],
  exports: [
    ErrorComponent,
    NoAccessComponent,
    PageNotFoundComponent
  ]
})
export class ErrorModule {}
