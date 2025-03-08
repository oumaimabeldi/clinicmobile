import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-medicale',
  templateUrl: './historique-medicale.component.html',
  styleUrls: ['./historique-medicale.component.scss'],
  standalone:false
})
export class HistoriqueMedicaleComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  goToPage(page:string) {
    window.location.href = page;
  }

}
