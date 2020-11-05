import { Component, OnInit } from '@angular/core';
declare var productslider : any;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    productslider();
  }

}
