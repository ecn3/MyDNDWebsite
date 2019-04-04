import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './builder/header/header/header.component';
import { NameComponent } from './builder/header/name/name.component';
import { RaceComponent } from './builder/header/race/race.component';
import { SubraceComponent } from './builder/header/subrace/subrace.component';
import { BackgroundComponent } from './builder/header/background/background.component';
import { ClassComponent } from './builder/header/class/class.component';
import { LevelComponent } from './builder/header/level/level.component';
import { RaceTableComponent } from './race-table/race-table.component';
import { RaceRowComponent } from './race-row/race-row.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
<<<<<<< HEAD
    HeaderComponent,
    NameComponent,
    RaceComponent,
    SubraceComponent,
    BackgroundComponent,
    ClassComponent,
    LevelComponent
=======
    RaceTableComponent,
    RaceRowComponent
>>>>>>> 521c79a86929f48cf572f704619416262cd836d1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
