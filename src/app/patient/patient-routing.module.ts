import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientPage } from './patient.page';
import { HistoriqueMedicaleComponent } from './historique-medicale/historique-medicale.component';

const routes: Routes = [
  {
    path: '',
    component: PatientPage
  },
  {
    path: 'historique-medicale',
    component: HistoriqueMedicaleComponent, // Route pour la page d'historique médicale
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientPageRoutingModule {}
