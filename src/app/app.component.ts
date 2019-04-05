import { Component, OnInit } from '@angular/core';
import { GetCardsService } from './get-cards.service';

import * as Magic from "mtgsdk-ts";

export class SetOfCards {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'black-lotus';

  cards: Magic.Card[] = new Array<Magic.Card>();

  //optionsSets: SetOfCards[] = new Array<SetOfCards>();

  /*
  optionsSets: SetOfCards[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  */

  constructor(private getCardsService: GetCardsService) {
  }

  ngOnInit() {
    /*
    this.getCardsService.getCards().then(result => {
      this.cards = result;
      
      for (const card of result) {
        console.log(card); 
      }

    });
    */
    this.getCardsService.getAllCards().then(result => {
      //this.cards = result;
      
      for (const card of result) {
        if(card.imageUrl != null) {
          this.cards.push(card);
        }
        console.log(card); 
      }

    });
    /*
    this.getCardsService.getSets().on("data", set => {
      let setTmp: SetOfCards = new SetOfCards();
      setTmp.value = set.name;
      setTmp.viewValue = set.name;
      this.optionsSets.push(setTmp);
      console.log(set.name);
    }).on("end", () => {
      console.log("done");
    });
    */
  }
}
