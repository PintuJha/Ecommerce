import { Component, OnInit } from '@angular/core';
declare var menucode:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    menucode();
  }
}
