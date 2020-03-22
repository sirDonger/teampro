
import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { appRoutes } from './app-routing';
import { NgModule } from '@angular/core';

//  modules 
import { OwlModule } from 'ngx-owl-carousel';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { SlickCarouselModule } from 'ngx-slick-carousel';

// components 
import { LandingComponent } from './landing/landing.component';
import { ServicedialogboxComponent } from './landing/servicedialogbox/servicedialogbox.component';
import { VideosComponent } from './videos/videos.component';

// pipes
import { TruncatePipe } from './shared/_pipes/str-limit.pipe';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    CookieModule.forRoot(),
    CoreModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    OwlModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    NgxSmartModalModule.forRoot(),
    SlickCarouselModule
  ],
  entryComponents: [ServicedialogboxComponent],
  declarations: [AppComponent, LandingComponent, ServicedialogboxComponent, VideosComponent, TruncatePipe],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
