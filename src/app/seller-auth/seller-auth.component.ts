import { Component, OnInit } from '@angular/core';
import { SellerServiceService } from '../service/seller-service.service';

import { Login, Signup } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

   IsSignupLogin = false;
   Isloginerror:string='';
  constructor(private seller:SellerServiceService) { }

  ngOnInit(): void {
    this.seller.relocalSeller();
  }
  
  signup(data: Signup): void {
      // Log the data for debugging purposes
    this.seller.UserSignup(data);
    
  }
  Login(data:Login):void{
     this.seller.UserLogin(data);
     this.seller.authLoginError.subscribe((error)=>{
         if(error){
            this.Isloginerror = "Email and password are not correct";
         }
     })
  }
  openSwitchForm(){
     this.IsSignupLogin = !this.IsSignupLogin
  }
  
}
