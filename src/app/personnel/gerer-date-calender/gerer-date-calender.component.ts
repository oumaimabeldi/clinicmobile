import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EventModalComponent } from '../event-modal/event-modal.component';

@Component({
  selector: 'app-gerer-date-calender',
  templateUrl: './gerer-date-calender.component.html',
  styleUrls: ['./gerer-date-calender.component.scss'],
  standalone:false
})
export class GererDateCalenderComponent   {

  currentDate: Date = new Date();
  currentMonth!: string;
  currentYear!: number;
  weekdays: string[] = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  days: (number | string)[] = [];
  isModalOpen = false;
  selectedDay: number | null = null;
  events: { [key: number]: { title: string; time: string }[] } = {};

  constructor(private modalCtrl: ModalController, private router:Router) {
    this.updateCalendar();
  }

  // Méthode pour revenir en arrière
  goBack() {
    this.router.navigate(['/personnel'])
  }

  // Met à jour le calendrier
  updateCalendar() {
    this.currentMonth = this.currentDate.toLocaleString('default', { month: 'long' });
    this.currentYear = this.currentDate.getFullYear();
    this.days = this.generateDaysArray(this.currentDate.getMonth(), this.currentDate.getFullYear());
  }

  // Génère les jours du mois
  generateDaysArray(month: number, year: number): (number | string)[] {
    const daysArray: (number | string)[] = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push('');
    }

    for (let i = 1; i <= totalDaysInMonth; i++) {
      daysArray.push(i);
    }

    return daysArray;
  }

  // Change de mois
  changeMonth(offset: number) {
    this.currentDate.setMonth(this.currentDate.getMonth() + offset);
    this.updateCalendar();
  }

  // Ouvre les détails d'un jour
  openDayDetails(day: number | string) {
    if (typeof day === 'number') {
      this.selectedDay = day;
      this.isModalOpen = true;
    }
  }

  // Ferme le modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Vérifie si un jour a des événements
  hasEvent(day: number | string): boolean {
    return typeof day === 'number' && this.events[day] && this.events[day].length > 0;
  }

  // Récupère les événements d'un jour
  getEventsForDay(day: number | null): { title: string; time: string }[] {
    return day !== null ? this.events[day] || [] : [];
  }

  // Ajoute un événement
  async addEvent() {
    const modal = await this.modalCtrl.create({
      component: EventModalComponent,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data && this.selectedDay !== null) {
      if (!this.events[this.selectedDay]) {
        this.events[this.selectedDay] = [];
      }
      this.events[this.selectedDay].push(data);
    }
  }

  // Supprime un événement
  deleteEvent(event: { title: string; time: string }) {
    if (this.selectedDay !== null) {
      this.events[this.selectedDay] = this.events[this.selectedDay].filter((e: { title: string; time: string }) => e !== event);
    }
  }

}
