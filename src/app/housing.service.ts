import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HomeDescription} from './homeDescription.interface';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class HousingService {
private _url: string = "assets/data/housingData.json";
public newHomesSubject = new Subject<any>();

  constructor(private _http: HttpClient) { }

  getHousingData(): Observable<HomeDescription[]> {
    return this._http.get<HomeDescription[]>(this._url);
  }

  addHouse(data) {
    data.image = "assets/img/default-crib";
    this.newHomesSubject.next(data);
  }

}
