import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private router: Router) {};


  ngOnInit() {
  }

private tmp:boolean;
  isFocus()
  {
  //this.router.navigate(['/form1']);
   this.tmp =!(this.tmp);
   console.log("this.tmp--"+ this.tmp);
   return this.tmp;
  }


  jump() {
  	this.router.navigate(['/form1']);
  }





}
