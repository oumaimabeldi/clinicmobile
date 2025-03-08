import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Doctors } from 'src/app/models/dorctors';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
  standalone: false,


})
export class DoctorsListComponent  implements OnInit {
  
  currentPage = 1;
  //imageBaseUrl = environment.images;

  constructor( 
  
    private loadingCtrl:LoadingController) { }

  ngOnInit() {}

  doctorListe:Doctors[]=[
      {
        id: 1,
        nom: "ala",
        prenom: "Mohammed",
        speciality: "Cardiologiste",
        rating: 3,
        description: "hhdgb dhdgt bchdt bcjdt jdhdysj b.",
        disponibiliteActuelle: "Available",
        lieuLocal: "clinic",
        img:"assets/doctors/doctor2.jpg"
      },
      {
        id: 2,
        nom: "Alane",
        prenom: "Alex",
        speciality: "Pédiatriste",
        rating: 4,
        description: "hhdgb dhdgt bchdt bcjdt jdhdysj b.",
        disponibiliteActuelle: "Not Available",
        lieuLocal: "Marsa/ Faculty of Medicine of Tunis, R534+F9H, Rue de la Faculte de Medecine, Tunis",
        img:"assets/doctors/doctor1.jpg"
      },
      {
        id: 3,
        nom: "Hend",
        prenom: "smith",
        speciality: "Orthopédiste",
        rating: 3,
        description: "hhdgb dhdgt bchdt bcjdt jdhdysj b.",
        disponibiliteActuelle: "Available",
        lieuLocal: "clinic",
        img:"assets/doctors/doctor3.jpg"
      },
  
    ]
    async loadMovies(event?:InfiniteScrollCustomEvent){
      //loading spinner
      const loading = await this.loadingCtrl.create({
        message:'Loading..',
        spinner:'bubbles',
      });
      await loading.present();
  
      
    }
    loadMore(event:InfiniteScrollCustomEvent)
    {
      this.currentPage++;
      this.loadMovies(event);
  
    }
}
