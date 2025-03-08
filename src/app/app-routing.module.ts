import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/services', // Redirige vers la page des services par défaut
    pathMatch: 'full'
  },
  {
    path: 'personnel',
    loadChildren: () => import('./personnel/personnel.module').then(m => m.PersonnelPageModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientPageModule)
  },
  {
    path: 'authentification',
    loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationPageModule)
  },
  {
    path: 'tabs',
    component: TabsPage, // Utilisez le composant TabsPage comme page parente
    children: [
      {
        path: 'services',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsPageModule)
      },
      {
        path: 'doctors',
        loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsPageModule)
      },
      {
        path: '', 
        redirectTo: 'services',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
