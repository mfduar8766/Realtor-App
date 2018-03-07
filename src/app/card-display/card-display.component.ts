import { Component, OnInit, Input } from '@angular/core';
import {HomeDescription} from '../homeDescription.interface';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent implements OnInit {

  @Input('homes') homes: HomeDescription;

  constructor() { }

  ngOnInit() {
  }

}
