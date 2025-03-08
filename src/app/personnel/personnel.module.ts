import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelPageRoutingModule } from './personnel-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PersonnelPage } from './personnel.page';
import { GererDateCalenderComponent } from './gerer-date-calender/gerer-date-calender.component';
import { EventModalComponent } from './event-modal/event-modal.component';
import { DoctorComponent } from './doctor_card/doctor.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelPageRoutingModule,
  ],
  declarations: [PersonnelPage,DoctorsListComponent]
})
export class PersonnelPageModule {}
