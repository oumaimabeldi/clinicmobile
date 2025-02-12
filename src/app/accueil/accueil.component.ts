import { Component, OnInit } from '@angular/core';
import { Doctors } from '../models/dorctors';
import { Route, Router } from '@angular/router';
import { Service } from '../models/service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  standalone: false,
})
export class AccueilComponent  implements OnInit {

  constructor(private router:Router) { }

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

  serviceListe:Service[]=[
    {id:1,nomService:"Cardiologie",img:"assets/home/iconeCardiologie.png"},
    {id:2,nomService:"Ophtalmologie",img:"assets/home/iconeOphtalmo.png"},
    {id:3,nomService:"Urgence",img:"assets/home/iconeUrgence.png"},
    {id:4,nomService:"Pediatrie",img:"assets/home/iconePediatrie.png"},
  ]


  navigatTo(location:string){
    this.router.navigate([location])  
  }

}
