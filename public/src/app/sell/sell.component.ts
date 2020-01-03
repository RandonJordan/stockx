import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  item_info: any;
  constructor(private _httpService: HttpService,
    private _route: Router
    ) { }

  ngOnInit() {
  this.item_info= {title: "", price: "", imgUrl: "", description: "", brand: ""};
  }
  sell(item_info){
    console.log(this.item_info, "this is the form")
    this._httpService.sell(this.item_info).subscribe(data =>{
      this.item_info = data;
      this._route.navigate(['browse'])
    })
  }
}
