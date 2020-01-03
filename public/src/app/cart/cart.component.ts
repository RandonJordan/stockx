import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  numOfItems: any;
  total: any;
  totalItem: Number;

  constructor(private _httpService: HttpService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.cart = this._httpService.cart;
    console.log("this.cart is", this.cart);
    this.total = this._httpService.total;
    this.totalItem = this._httpService.numOfItems;
    // console.log(this.total, "this is the total")
  }
  emptyCart(){
    this.cart= [];
    // console.log(this.cart);
    this._httpService.cart = this.cart;
    this.total = 0;
    this._httpService.total = this.total;
    this._httpService.numOfItems = 0;
    this._router.navigate(['/confirm'])
  }

}
