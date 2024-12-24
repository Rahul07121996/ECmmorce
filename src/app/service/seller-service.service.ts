import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  constructor(private http: HttpClient) { }

  // UserSignup(data:object):Observable<any>{
  //    return this.http.post<any>('http://localhost:3000/seller', data);
  // }

  UserSignup(data:object){
    return this.http.post('http://localhost:3000/seller', data);
 }
}
