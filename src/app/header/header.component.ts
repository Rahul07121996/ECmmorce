import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sellerName:string='';
  menutype:string='';
  constructor(private route :Router) { }

  ngOnInit(): void {
     
    this.route.events.subscribe((val:any)=>{
     if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          const sellerData = JSON.parse(localStorage.getItem('seller') || '[]')[0] || {};
          this.sellerName = sellerData?.name;
          this.menutype='seller';
          console.log('seller area')
        }
        else{
          this.menutype='default'
          console.log('outside seller area')
        }
     }
    })
  }

  logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/']);
  }

}
