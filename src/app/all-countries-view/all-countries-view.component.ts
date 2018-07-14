import { Component, OnInit } from '@angular/core';

import { Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-all-countries-view',
  templateUrl: './all-countries-view.component.html',
  styleUrls: ['./all-countries-view.component.css'],
  providers: [Location]
})
export class AllCountriesViewComponent implements OnInit {

  public countries;
  public languageFilter;
  public currencyFilter;
  public regionName;

  constructor(public http:HttpService, public _route:ActivatedRoute, public route:Router,
              public loc:Location, private toastr: ToastrService,
              private spinner: NgxSpinnerService ) { }
  

  
  ngOnInit() {
    
        /** spinner starts on init */
        this.spinner.show();
 
        setTimeout(() => {
            /** spinner ends after a second */
            this.spinner.hide();
        }, 1200);

    console.log("onInit called")
    
    

   this.regionName = this._route.snapshot.paramMap.get('current_region');
   console.log(this.regionName)


   


   this._route.queryParams.subscribe( 

    params =>{
      if(params["language_code"]){
        this.getCountriesByLanguage(params["language_code"]);
        
        this.languageFilter = true
      }
      else if(params["currency_code"]){
        this.getCountriesByCurrency(params["currency_code"]);
        
        this.currencyFilter=true
      }
      else{
        this.getCountries();
      }
     
      
    }
   )                

  }  // ngOnInit ends

public getCountries (){
  this.http.getAllCountries(this.regionName).subscribe(
    data =>{
      this.countries=data;
      console.log(this.countries)
      this.toastr.info(`Welcome to ${this.regionName} `,'Exploration Begins Here',{timeOut:3000,});
     }
  )

}



  public getCountriesByLanguage(language_code){
   
           /** spinner starts on init */
           this.spinner.show();
 
           setTimeout(() => {
               /** spinner ends after a second */
               this.spinner.hide();
           }, 1200);

    this.http.getLanguage(language_code).subscribe(

      data =>{
      this.countries = data;
      this.toastr.info(`Language Filter Applied `,'Success',{timeOut:2000,});
      this.languageFilter = false;
    }
   ) 

   
 }

 public getCountriesByCurrency(currency_code){

             /** spinner starts on init */
             this.spinner.show();
 
             setTimeout(() => {
                 /** spinner ends after a second */
                 this.spinner.hide();
             }, 1200);
             
   this.http.getCurrency(currency_code).subscribe(
   
       data =>{
         this.countries = data;
         this.toastr.info(`Currency Filter Applied `,'Success',{timeOut:2000,});
         this.currencyFilter = false;
        }
       
    )

  
 }



   public goBackToPreviousLocation():any{
       this.loc.back();
   }
  

   
}