import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetCardsService } from './get-cards.service';
import { MatSelectModule } from '@angular/material';
import { DemoMaterialModule } from './demo-material.module';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [GetCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
