import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app 入门实战';
  username = "tony cai";


  // router 用法
  constructor(private router: Router) {};
  toTest() {
    console.log("to test() runing..");
    this.router.navigate(['/test']);

  }

}
