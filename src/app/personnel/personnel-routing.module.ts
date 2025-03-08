import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnelPage } from './personnel.page';
import { GererDateCalenderComponent } from './gerer-date-calender/gerer-date-calender.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

const routes: Routes = [
  {
    path: '',
    component: PersonnelPage
  },
  {
    path:'calendar', component:GererDateCalenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnelPageRoutingModule {}
