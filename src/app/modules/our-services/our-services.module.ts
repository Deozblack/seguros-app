import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServicesRoutingModule } from './our-services-routing.module';
import { OurServicesComponent } from './our-services.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OurServicesComponent
  ],
  imports: [
    CommonModule,
    OurServicesRoutingModule,
    SharedModule
  ]
})
export class OurServicesModule { }
