import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PhotoSkillsComponent } from './photo-skills-list/photo-skills.component';
import { PhotoSkillsDiscount } from './photo-skills-discount/photo-skills-discount.component';
import { PhotoEventBooking } from './photo-event-booking/photo-event-booking.component';
import { PhotoWorkComponent } from './photo-work/photo-work.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { BookingFormComponent } from './photo-event-booking/photo-event-booking-form.component'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: PhotoSkillsComponent },
      { path: 'home/:category', component: PhotoWorkComponent},
      { path: 'gallery', component: PhotoGalleryComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PhotoSkillsComponent,
    PhotoSkillsDiscount,
    PhotoEventBooking,
    PhotoWorkComponent,
    PhotoGalleryComponent,
    BookingFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/