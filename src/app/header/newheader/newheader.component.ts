import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
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



  onMouseEnterHandler () {
		$(".ghjgdf").removeClass("show-now1");
    }

  changeclass(){
		$(".category").addClass("show-now2");
	 }



}
