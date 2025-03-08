import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.page.html',
  styleUrls: ['./personnel.page.scss'],
  standalone: false,
})
export class PersonnelPage implements OnInit {



  ngOnInit() {
  }

  constructor(private router: Router) {}

  // Navigation vers le calendrier
  navigateToCalendar() {
    this.router.navigate(['/personnel/calendar']);
  }

  // Navigation vers les tâches
  navigateToTasks() {
    this.router.navigate(['/tasks']);
  }

  // Navigation vers les messages
  navigateToMessages() {
    this.router.navigate(['/messages']);
  }

  // Navigation vers le profil
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

}
