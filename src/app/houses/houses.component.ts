import { Component, OnInit } from '@angular/core';
// import {housingData} from './../data/housingData';
import {HousingService} from '../housing.service';
import {UtilService} from '../util.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  public homesData = [];
  public sortFields: Array<string> = ['address', 'area', 'bathrooms', 'bedrooms', 'price', 'type'];
  public sortDirection: 'asc';
  public sortField: 'price';


  constructor(private housingService: HousingService, private utilService: UtilService) { }

  ngOnInit() {
    this.housingService.getHousingData().subscribe(data => this.homesData = data);
    this.housingService.newHomesSubject.subscribe(data => this.homesData = [data, ...this.homesData]);
  }

}
