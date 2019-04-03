import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { RaceComponent } from './race/race.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
