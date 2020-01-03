import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
// const bcrypt = require('bcrypt');
// import * as bcrypt from "bcrypt";
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user_info: any;
  err: {user: any, pw: any, email: any};
  constructor(private _httpService: HttpService,
    private _route: Router,
    ) { }
  
  
  ngOnInit() {
    this.user_info= {username: "", email: "", password: "", cw: ""};
  }
  register(user_info){
    console.log("hit this succesfully", this.user_info);
    // if( this.user_info.password != this.user_info.cpw){
    //   this.err.pw = "Password does not match";
    //   console.log(this.err.pw, "this is error message for pw") } else
     if( this.user_info.password === this.user_info.cw){
      this._httpService.register(this.user_info).subscribe(data =>{
        console.log(data, "hits the component");
        this.user_info = data;
        if(data['user']){
          console.log('Testing')
          this._route.navigate([''])
        } else{
          this.err = data['errors'];
          console.log(this.err, "this is the error message")
        }
      })
    }
  }
}
