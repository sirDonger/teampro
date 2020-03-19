import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorModule } from './error/error.module';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    ErrorModule,
    SharedModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent]
})
export class CoreModule {}
