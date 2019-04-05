import { Injectable } from '@angular/core';

import * as Magic from "mtgsdk-ts";

@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  // replace
  // node: false,
  // for:
  // node: { crypto: true, stream: true, fs: "empty", net: "empty", tls: "empty" },
  // file: `node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js'

  constructor() { }

  getCards(): Promise<Magic.Card[]> {
    /*
    Magic.Sets.where({block: "Kaladesh"}).then(results => {
      for (const set of results) console.log(set);
    });

    Magic.Formats.all().then(result => {
      for (const format of result) console.log(format);
    });

    Magic.Sets.all({page: 5, pageSize: 30}).on("data", set => {
      console.log(set.name);
    }).on("end", () => {
      console.log("done");
    });
    */
   /*
    Magic.Sets.generateBooster("HOU").then(result => {
      for (const card of result) console.log(card);
    });
*/
/*
    Magic.Cards.where({setName: "Kaladesh"}).then(result => {
      for (const card of result) console.log(card);
    })
    */

    return Magic.Cards.where({setName: "Kaladesh"});
    
    /*
    Magic.Types.all().then(result => {
      for (const type of result) console.log(type);
    });
    */
  }

  getAllCards(): Promise<Magic.Card[]> {

    return Magic.Cards.where({page: 10, pageSize: 30});
  
  }

  getSets(): Magic.MagicEmitter<Magic.Set> {
    return Magic.Sets.all({page: 5, pageSize: 30});
  }
}
