import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Login, Signup } from '../data-type';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  IsSellerLogin = new BehaviorSubject<boolean>(false);
  authLoginError = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient,private route:Router) { }

  // UserSignup(data:object):Observable<any>{
  //    return this.http.post<any>('http://localhost:3000/seller', data);
  // }

  UserSignup(data: Signup) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.IsSellerLogin.next(true);
        localStorage.setItem("seller",JSON.stringify(result.body));
        this.route.navigate(['seller-home']);
      })
  }
 
  relocalSeller(){
    if(localStorage.getItem("seller")){
      this.IsSellerLogin.next(true);
      this.route.navigate(['seller-home']);
      
    }
  }
  UserLogin(data:Login){
     this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'})
                .subscribe((result:any)=>{
                  if(result && result.body && result.body.length==1){
                    localStorage.setItem("seller",JSON.stringify(result.body));
                    this.route.navigate(['seller-home']);
                  }else{
                     this.authLoginError.emit(true);
                  }
                })
  }

}
