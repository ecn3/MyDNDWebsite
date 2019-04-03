import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../race'

@Component({
  selector: 'app-race-table-info',
  templateUrl: './race-table-info.component.html',
  styleUrls: ['./race-table-info.component.css']
})
export class RaceTableInfoComponent implements OnInit {

@Input() public race: Race;

  constructor() { }

  ngOnInit() {
  }

}
