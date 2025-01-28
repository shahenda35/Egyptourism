import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
//import { CityComponent } from './city/city/city.component';
import { AgencyComponent } from './agency/agency/agency.component';
import { TripsComponent } from './trip/trips/trips.component';
import { AgencyDetailsComponent } from './agency/agency-details/agency-details.component';
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/signup/signup.component';
import { WeatherComponent } from './weather/weather.component';
import { CitiesComponent } from './places/cities/cities.component';
import { LandmarksComponent } from './places/landmarks/landmarks.component';
import { ShowcityComponent } from './places/showcity/showcity.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 // { path: 'city', component: CityComponent },
  { path: 'agency', component: AgencyComponent },
  { path: 'trip', component: TripsComponent },
  { path: 'agency/details', component: AgencyDetailsComponent },
  { path: 'signIn', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'LandMarks', component: LandmarksComponent },
  { path: 'LandMarks/:id', component: LandmarksComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'cities/ShowCity/:id', component: ShowcityComponent },
  { path: 'Weather', component: WeatherComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
