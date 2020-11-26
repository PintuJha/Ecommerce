import { Component, OnInit } from '@angular/core';
declare var blog : any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    blog();
  }

}
