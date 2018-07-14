import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RegionViewComponent } from './region-view/region-view.component';
import { SinglecountryViewComponent } from './singlecountry-view/singlecountry-view.component';
import { AllCountriesViewComponent } from './all-countries-view/all-countries-view.component';

import { HttpService } from './http.service';

import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    RegionViewComponent,
    SinglecountryViewComponent,
    AllCountriesViewComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    Ng2SearchPipeModule,     // required pipe module
    BrowserAnimationsModule, // required animations module
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot([
    { path:'region-view', component:RegionViewComponent },
    { path:'singlecountry-view/:current_country', component:SinglecountryViewComponent },
    { path:'all-countries-view/:current_region', component: AllCountriesViewComponent },
    { path:'all-countries-view/:currency_code', component: AllCountriesViewComponent },
    { path: "", redirectTo: "region-view", pathMatch: "full" },
    { path: "**", redirectTo: "region-view", pathMatch: "full" }
  ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
