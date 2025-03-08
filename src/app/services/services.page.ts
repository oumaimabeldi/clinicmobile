import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  standalone:false
})
export class ServicesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  serviceListe:Service[]=[
    {id:1,nomService:"Cardiologie",img:"assets/home/iconeCardiologie.png"},
    {id:2,nomService:"Ophtalmologie",img:"assets/home/iconeOphtalmo.png"},
    {id:3,nomService:"Urgence",img:"assets/home/iconeUrgence.png"},
    {id:4,nomService:"Pediatrie",img:"assets/home/iconePediatrie.png"},
  ]
  
  menuOuvert = false;

  toggleMenu() {
    this.menuOuvert = !this.menuOuvert;
  }
  
  choisirUtilisateur(type: string) {
    console.log(`Utilisateur sélectionné : ${type}`);
    this.menuOuvert = false; // Ferme le menu après sélection
  }
  
  connexion() {
    console.log("Redirection vers la page de connexion...");
    this.router.navigate(['/authentification'])
  }
  

}
