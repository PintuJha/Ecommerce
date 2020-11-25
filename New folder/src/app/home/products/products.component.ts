import { Component, OnInit } from '@angular/core';
declare var productslider : any;
declare var tooltip : any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    productslider();
    tooltip();
  }

}
