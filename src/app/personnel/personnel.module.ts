import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnelPageRoutingModule } from './personnel-routing.module';

import { PersonnelPage } from './personnel.page';
import { GererDateCalenderComponent } from './gerer-date-calender/gerer-date-calender.component';
import { EventModalComponent } from './event-modal/event-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnelPageRoutingModule,
  ],
  declarations: [PersonnelPage,GererDateCalenderComponent,
    EventModalComponent
  ]
})
export class PersonnelPageModule {}
