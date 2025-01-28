import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyComponent } from './agency/agency.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  declarations: [
    AgencyComponent,
    AgencyDetailsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FieldsetModule
  ]
})
export class AgencyModule { }
