import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { login, signUp } from 'userSignup';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLogedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<boolean>(false);

  constructor( private http:HttpClient, private router:Router) { }
  userSignup(data:signUp){
     this.http.post("http://localhost:3000/seller",data ,{observe:'response'}).subscribe((result)=>{
       console.log(result);
       if(result){
        
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
       }
       
    })
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLogedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data:login){
    //console.log(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
     {observe:'response'}).subscribe((result:any)=>{
      console.log(result);
      if(result.body.length === 1){
        this.isLoginError.emit(false);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }
      else {
        console.log("Logging unsucessful ");
        this.isLoginError.emit(true);
      }
    
     })
  }
}
 