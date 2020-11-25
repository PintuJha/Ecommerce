import { Component, OnInit } from '@angular/core';
declare var  brand : any;
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.less']
})
export class BrandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    brand();
  }

}
