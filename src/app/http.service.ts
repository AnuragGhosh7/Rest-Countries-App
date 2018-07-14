import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import Observable to handle Observable response
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
   
   
  constructor(public http: HttpClient) {
   console.log("constructor called")
   }

   private handleError(err: HttpErrorResponse) {
    console.log("Handle error called");
    console.log(err.message);
    return Observable.throw(err.message);
  }


  public getAllCountries(region) {

    let myResponse = this.http.get(`https://restcountries.eu/rest/v2/region/${region}`)
    console.log(myResponse)
    return myResponse
  }

  public singleCountry(currentCountry) {

    let myResponse = this.http.get(`https://restcountries.eu/rest/v2/name/${currentCountry}?fullText=true`)
    console.log(myResponse)
    return myResponse
  }

  public getCurrency(currencyCode) {
    console.log(currencyCode)

    let myResponse = this.http.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    console.log(myResponse)
    return myResponse
  }

  public getLanguage(languageCode) {

    let myResponse = this.http.get(`https://restcountries.eu/rest/v2/lang/${languageCode}`)
    console.log(myResponse)
    return myResponse
  }

  }
