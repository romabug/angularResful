import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component implements OnInit {

createUser (info:any) {
  console.log(info);
 // alert(info.myusername);

}

  constructor() { }

  ngOnInit() {

  }




}
