import { Component, OnInit } from '@angular/core';
import { SellerServiceService } from '../service/seller-service.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  
  signup(data: object): void {
    console.log(data);  // Log the data for debugging purposes
     
    this.seller.UserSignup(data).subscribe((result=>{
     
         if(result){
          this.route.navigate(["seller-home"]);
         }
    }))
  }
  
}
