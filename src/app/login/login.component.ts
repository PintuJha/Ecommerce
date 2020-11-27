import { Component, OnInit } from '@angular/core';
declare var pricerange : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    pricerange();
  }

}
