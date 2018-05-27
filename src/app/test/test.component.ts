import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Myser} from '../myservice.service';
import { myaaa } from '../mygloble';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private router: Router, private ser1:Myser) {};


  ngOnInit() {
  }

private tmp:boolean;

  serupdate () {

    this.ser1.name = "got changed hohoho";
    myaaa.aa = "myaaa updated by test"

  }



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
