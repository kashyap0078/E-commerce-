import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../servises/products.service';
import { product } from 'userSignup';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
 productList: undefined | product[];
  constructor(private product: ProductsService) { }

  ngOnInit(): void {
    this.product.productList().subscribe((result)=>{
      console.log(result);
      if(result){
       this.productList = result
      }
    })
  }

}
