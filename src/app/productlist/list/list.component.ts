import { Component, OnInit } from '@angular/core';
declare var listgrid : any;
declare var productslider : any;
declare var pricerange : any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    listgrid();
    productslider();
    pricerange();
  }

}
