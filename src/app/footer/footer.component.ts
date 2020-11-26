import { Component, OnInit } from '@angular/core';
declare var topbtn : any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    topbtn();
  }

}
