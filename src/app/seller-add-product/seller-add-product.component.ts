import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../servises/products.service';
import { product } from 'userSignup';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: string | undefined
  constructor(private product: ProductsService) { }

  ngOnInit(): void {
  }
  submit(data:product){
    this.product.addProduct(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.addProductMessage = "The Product has been added sucessfully"
      }
      
    })
    setTimeout(() =>{
     this.addProductMessage = undefined
    },5000)

      
  }
}
