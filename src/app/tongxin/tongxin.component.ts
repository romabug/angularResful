import { Component, OnInit } from '@angular/core';
import {StockInfo} from '../details/details.component';

@Component({
  selector: 'app-tongxin',
  templateUrl: './tongxin.component.html',
  styleUrls: ['./tongxin.component.css']
})

 

export class TongxinComponent implements OnInit {

  constructor() { }
    ngOnInit() { }

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


///////for out put/////////////////////////////
//引用{StockInfo} from '../details/details.component';
private getmystock: StockInfo ={name:"aaa", price:111};
 private nn:string;
 private pp:number;


//子组件里this.searchResult.emit(stockInfo) 广播stockInfo对象;
myreceiver(stockInfo: StockInfo){
 this.getmystock = stockInfo; 
 //console log 显示 obj 的方式
 ///console.log("i am result handler --", stockInfo);
  this.nn = stockInfo.name;
  this.pp = stockInfo.price;
 
}





}


 
