import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private menu: MenuController) {}

  openMenu() {
    this.menu.open('main-content');
  }

  closeMenu() {
    this.menu.close('main-content');
  } 
}
