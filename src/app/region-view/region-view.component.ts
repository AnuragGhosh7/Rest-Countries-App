import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.css']
})
export class RegionViewComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService,private toastr: ToastrService) { }

  ngOnInit() {

      /** spinner starts on init */
      this.spinner.show();
 
      setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
      }, 1000);
  
   

  }

}
