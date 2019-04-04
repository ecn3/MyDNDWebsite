import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../race';

@Component({
  selector: 'app-race-row',
  templateUrl: './race-row.component.html',
  styleUrls: ['./race-row.component.css']
})
export class RaceRowComponent implements OnInit {

  @Input() public race: Race;

  constructor() { }

  ngOnInit() {
  }

}
