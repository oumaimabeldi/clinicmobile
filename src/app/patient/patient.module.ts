import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientPageRoutingModule } from './patient-routing.module';

import { PatientPage } from './patient.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { HistoriqueMedicaleComponent } from './historique-medicale/historique-medicale.component';




@NgModule({
  declarations: [
    PatientPage,
    HistoriqueMedicaleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientPageRoutingModule
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientPageModule {}
