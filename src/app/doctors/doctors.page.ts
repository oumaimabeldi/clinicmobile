import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctors } from '../models/dorctors';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
  standalone:false
})
export class DoctorsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigatTo(location:string){
    this.router.navigate([location])  
  }
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
}
