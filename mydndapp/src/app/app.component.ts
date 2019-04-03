import { Component } from '@angular/core';
import data from '../assets/data/races.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'races';
  public races = data;
}
