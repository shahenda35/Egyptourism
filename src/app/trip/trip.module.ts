import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripsComponent } from './trips/trips.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [TripsComponent],
  imports: [CommonModule, CardModule, ButtonModule],
})
export class TripModule {}
