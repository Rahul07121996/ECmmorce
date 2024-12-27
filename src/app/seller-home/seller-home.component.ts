import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productMessage: undefined | string;
  ProductList : undefined | product[];
  constructor(private productService :ProductService) { }

  ngOnInit(): void {
     this.productService.getproductList().subscribe((result)=>{
      if(result){ 
        console.log(result);
          this.ProductList = result
        }
     })
  }

}
