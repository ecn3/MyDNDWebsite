import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { RaceTableComponent } from './race-table/race-table.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RaceTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
