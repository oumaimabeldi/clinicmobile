import { NgModule } from '@angular/core';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsPage } from './tabs/tabs.page';
import { TabsPageModule } from './tabs/tabs.module';
import { ServicesPageModule } from './services/services.module';
import { DoctorsPageModule } from './doctors/doctors.module';
import { AboutUsPageModule } from './about-us/about-us.module';
import { ContactPageModule } from './contact/contact.module';
import { ContactPage } from './contact/contact.page';
import { AboutUsPage } from './about-us/about-us.page';
import { DoctorsPage } from './doctors/doctors.page';
import { ServicesPage } from './services/services.page';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    CommonModule,
    TabsPageModule,AboutUsPageModule,HttpClientModule
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
