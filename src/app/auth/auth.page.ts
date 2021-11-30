import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss'],
})
export class AuthPage implements OnInit {

loginVar : boolean;
loginEst : boolean;
loginUser : boolean;

constructor() { 
  this.loginVar = true;
  this.loginEst = false;
  this.loginUser = false;
}

  ngOnInit() {
  }
  login(){
    this.loginVar = true;
    this.loginEst = false;
    this.loginUser = false;
  }
  establishmenRegister(){
    this.loginVar = false;
    this.loginEst = true;
    this.loginUser = false;
  }
  userRegister(){
    this.loginVar = false;
    this.loginEst = false;
    this.loginUser = true;
  }
}
