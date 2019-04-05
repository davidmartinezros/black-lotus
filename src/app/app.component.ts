import { Component, OnInit } from '@angular/core';
import { GetCardsService } from './get-cards.service';

import * as Magic from "mtgsdk-ts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'black-lotus';

  cards: Magic.Card[];

  constructor(private getCardsService: GetCardsService) {
  }

  ngOnInit() {
    this.getCardsService.getCards().then(result => {
      this.cards = result;
      for (const card of result) {
        console.log(card); 
      }
    });
  }
}
