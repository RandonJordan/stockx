import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _httpService: HttpService,private _route:Router) { }

  ngOnInit() {
    this.userinfo = {username: "", password: ""};
  }
  userinfo:any={};
  err:any;
  loginerror:any;

  login(){
    console.log(this.userinfo,'Testing UserInfor');
    this._httpService.login(this.userinfo).subscribe(data=>{
      if(data['user']){
        console.log('Testing A')
        this._route.navigate(['']);
      }
      else if(data['err']){
        this.err = data['errors'];
        console.log(this.err, "this is the error message");
      }
      else{
        console.log('TEsting e')
        this.loginerror = data['message']
        //put this loginerror for error 
      }
    })
  }

}
