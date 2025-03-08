import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
  standalone:false
})
export class EventModalComponent  implements OnInit {


  ngOnInit() {}

  event: { title: string; time: string } = { title: '', time: '' };

  constructor(private modalCtrl: ModalController) {}

  // Ferme le modal
  dismiss() {
    this.modalCtrl.dismiss();
  }

  // Enregistre l'événement
  save() {
    this.modalCtrl.dismiss(this.event);
  }

}
