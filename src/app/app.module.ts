import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetCardsService } from './get-cards.service';
import { MatSelectModule } from '@angular/material';
import { DemoMaterialModule } from './demo-material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [GetCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
