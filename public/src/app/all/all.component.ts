import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  all_items: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this._httpService.getAll().subscribe(data =>{
      this.all_items = data;
      console.log(this.all_items, "These are all the items")
    })
  }
}
