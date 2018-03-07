import { Component, OnInit, ViewChild } from '@angular/core';
import {HousingService} from '../housing.service'; //Gives access to an element in the HTML to grab it and change it.//
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
  propertyTypes: Array<string> = ['','House', 'Condo', 'Duplex'];
  @ViewChild('newHomesForm') newHomesForm: NgForm;


  constructor(public service: HousingService) { }

  ngOnInit() {
  }

  onHomeSubmit(data): void {
    this.service.addHouse(data);
    this.newHomesForm.reset();
  }

}

