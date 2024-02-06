import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'userSignup';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  addProduct(data:product){
    return this.http.post("http://localhost:3000/products",data)
  }
  productList(){
    return this.http.get<product[]>("http://localhost:3000/products")
  }
}
