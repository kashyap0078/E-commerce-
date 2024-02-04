import { Component, OnInit } from '@angular/core';
import { SellerService } from '../servises/seller.service';
import { login, signUp } from 'userSignup';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = false
  authError: string = ""
  constructor( private seller: SellerService) { }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data:signUp){
    console.warn(data);
    this.seller.userSignup(data);
  }
  login(data:signUp){
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) =>{
      if(isError){
        this.authError = "Email or Password is not correct";
      }
      
    })
  }
  openLogin(){
    this.showLogin = true
  }
  openSignup(){
    this.showLogin = false
  }

}
