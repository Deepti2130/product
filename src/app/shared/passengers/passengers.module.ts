import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassDashboardComponent } from './pass-dashboard/pass-dashboard.component';
import { PassCountComponent } from './pass-count/pass-count.component';
import { PassCardComponent } from './pass-card/pass-card.component';
import { materialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PassDashboardComponent,
    PassCountComponent,
    PassCardComponent
  ],
  imports: [
    CommonModule,
    materialModule

  ],
  exports:[
    PassDashboardComponent
  ]
})
export class PassengersModule { }
