import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandmarksComponent } from './landmarks/landmarks.component';
// import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';
import { RouterModule } from '@angular/router';
import { ShowcityComponent } from './showcity/showcity.component';

@NgModule({
  declarations: [LandmarksComponent, CitiesComponent, ShowcityComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    // ReactiveFormsModule,
    FormsModule,
  ],
  exports: [LandmarksComponent, CitiesComponent , ShowcityComponent],
})
export class PlacesModule {}
