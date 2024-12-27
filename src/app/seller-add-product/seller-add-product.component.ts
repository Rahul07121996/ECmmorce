import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../service/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage:string = '';
  constructor(private product:ProductService) { }

  ngOnInit(): void {
  }
  submit(data:product,form:NgForm):void{
     this.product.addProduct(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.addProductMessage = "Product is added successfully";

       setTimeout(() => {
        this.addProductMessage = '';
        form.reset();
       }, 3000);

      }
     })
  }
}
