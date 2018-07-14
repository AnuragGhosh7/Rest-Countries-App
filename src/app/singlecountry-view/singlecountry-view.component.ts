import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { Location } from "@angular/common";
import { ToastrService } from 'ngx-toastr';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-singlecountry-view',
  templateUrl: './singlecountry-view.component.html',
  styleUrls: ['./singlecountry-view.component.css']
})
export class SinglecountryViewComponent implements OnInit {

   public currentCountry;
   public countries;
    
  constructor(public _route:ActivatedRoute, public http:HttpService,
              public loc:Location, private toastr:ToastrService,
              private spinner: NgxSpinnerService  ) {
                
                console.log("constructor called")
               }

  ngOnInit() {


           /** spinner starts on init */
           this.spinner.show();
 
           setTimeout(() => {
               /** spinner ends after 5 seconds */
               this.spinner.hide();
           }, 1200);
   
    
 

    let country = this._route.snapshot.paramMap.get('current_country')   
    console.log(country)
  
    this.toastr.success(`Welcome to ${country} `,'Landed Successfully',{timeOut:2000,});

  this.http.singleCountry(country).subscribe(
      
    data =>{
      this.currentCountry = data;
      console.log(this.currentCountry)
    }
  
  )

  
  }
  


  public goBackToPreviousLocation(){
    this.loc.back();
  }
      

  }

