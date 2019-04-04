import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { RaceTableComponent } from './race-table/race-table.component';
import { RaceRowComponent } from './race-row/race-row.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RaceTableComponent,
    RaceRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
