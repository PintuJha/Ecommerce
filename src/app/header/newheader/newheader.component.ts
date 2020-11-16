import { Component, OnInit } from '@angular/core';
declare var newmenu : any;
declare var searchdata : any;
@Component({
  selector: 'app-newheader',
  templateUrl: './newheader.component.html',
  styleUrls: ['./newheader.component.less']
})
export class NewheaderComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    newmenu(); 
    searchdata();

  }
}
