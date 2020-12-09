import { Component, OnInit } from '@angular/core';
declare var slider : any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    slider();
  }

}
