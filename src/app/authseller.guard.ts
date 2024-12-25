import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerServiceService } from './service/seller-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthsellerGuard implements CanActivate {
  constructor(private IsSllerLogin:SellerServiceService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
       if(localStorage.getItem("seller")){
        return true;
       }
      return this.IsSllerLogin.IsSellerLogin;
  }
  
}
