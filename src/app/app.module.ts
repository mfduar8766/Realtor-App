import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import {HousingService} from '../app/housing.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import {UtilService} from '../app/util.service';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    CardDisplayComponent,
    AddListingFormComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HousingService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
