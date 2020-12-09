import { Component, OnInit } from '@angular/core';
declare var slider : any;
declare var testimonial : any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    slider();
    testimonial();
  }

}
