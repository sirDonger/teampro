import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorModule } from './error/error.module';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { VideoDialogboxComponent } from './video/video-dialogbox/video-dialogbox.component';

@NgModule({
  imports: [
    ErrorModule,
    SharedModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    VideoComponent,
    VideoDialogboxComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    VideoComponent]
})
export class CoreModule {}
