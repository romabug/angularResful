import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tongxin',
  templateUrl: './tongxin.component.html',
  styleUrls: ['./tongxin.component.css']
})
export class TongxinComponent implements OnInit {

  constructor() { }
  private myholder: string = "pls input text";
   private mysearch: string ="" ;
 private  passmycat: string = "this is passmycat from farther";
 

 showmyholder(){
 //这种形式绑定，前端dom每刷新一次 都在调用。
   return "please shu ru hanzi";

 };

 domyserch() {
 	  let aa = this.mysearch + "+ 6666";
   return aa + "+ extra words" ;
 }



  ngOnInit() {
  }

}
