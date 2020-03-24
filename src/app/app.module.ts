
 
import { CalendarComponent } from './components/calendar-page/components/calendar/calendar.component';
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

// material module 
import { MatSelectModule } from '@angular/material/select';

// components 
import { LandingComponent } from './components/landing/landing.component';
import { ServicedialogboxComponent } from './components/landing/servicedialogbox/servicedialogbox.component';
import { VideoDialogboxComponent } from './core/video/video-dialogbox/video-dialogbox.component';
import { VideosComponent } from './components/videos/videos.component';
 
// pipes
import { TruncatePipe } from './shared/_pipes/str-limit.pipe';
import { CalendarDialogboxComponent } from './components/calendar-page/components/calendar-dialogbox/calendar-dialogbox.component'; 

// other import 
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' }),
    NgxSmartModalModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlatpickrModule.forRoot(),
    SlickCarouselModule,
    MatSelectModule
  ],
  entryComponents: [
    ServicedialogboxComponent,
    VideoDialogboxComponent,
    CalendarDialogboxComponent
  ],
  declarations: [
    AppComponent, 
    LandingComponent, 
    ServicedialogboxComponent, 
    VideosComponent, 
    CalendarComponent,
    TruncatePipe,
    CalendarDialogboxComponent
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
