import { Component, OnInit } from '@angular/core';
declare var testimonial : any;
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.less']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    testimonial();
  }

}
