import { Component, OnInit } from '@angular/core';
declare var zoom : any;
@Component({
  selector: 'app-productdet',
  templateUrl: './productdet.component.html',
  styleUrls: ['./productdet.component.less']
})
export class ProductdetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    zoom();
  }

}
