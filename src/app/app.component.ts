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
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'black-lotus';

  page: number = 1;

  termSearch: String = "";

  termAutoComplete: String = "";

  nameCheck: Boolean = true;

  typesCheck: Boolean = false;

  textCheck: Boolean = false;

  cards: Magic.Card[];

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
    this.search();
  }

  search() {
    console.log(this.termSearch)
    this.page = 1;
    this.getCardsService.getAllCards(this.termSearch, this.nameCheck, this.typesCheck, this.textCheck, this.page, 30).then(result => {
      //this.cards = result;
      this.cards =  new Array<Magic.Card>();
      this.termAutoComplete = "";
      
      for (const card of result) {
        //if(card.imageUrl != null) {
          this.cards.push(card);
        //}
        console.log(card); 
      }

    });
  }
}
