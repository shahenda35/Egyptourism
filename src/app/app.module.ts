import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { TripModule } from './trip/trip.module';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { AgencyModule } from './agency/agency.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccessModule } from './access/access.module';
import { PlacesModule } from './places/places.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    TripModule,
    FormsModule,
    RatingModule,
    ButtonModule,
    AgencyModule,
    AccessModule,
    PlacesModule,

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
