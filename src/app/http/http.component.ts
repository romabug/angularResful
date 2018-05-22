import {Component, OnInit} from '@angular/core';

import {Http} from '@angular/http';

//import 'rxjs/Rx';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {


 // private datasource: Observable<any>;
  private tmpdata = [];

  private peopleurl = 'https://jsonplaceholder.typicode.com/users';


  constructor(public myhttp: Http) {

  }


  ngOnInit() {

//参考  https://segmentfault.com/a/1190000010088631
    this.myhttp.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json())
      .subscribe(user2 => {
        this.tmpdata = user2;
        console.log(user2);
      });

  }


}
