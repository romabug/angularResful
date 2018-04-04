import { CanDeactivate } from '@angular/router';
import { TestComponent } from '../test/test.component';

 //可以算是一个普通组件，但没有装饰器
// ng g component 声明后，会在module自动引用。。其它不变化
// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-guard',
//   templateUrl: './guard.component.html',
//   styleUrls: ['./guard.component.css']
// })
// export class GuardComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
// } 


export class LeaveGuard implements CanDeactivate<TestComponent> {
  //private aa = "the value--";
 
 canDeactivate(component: TestComponent)
 {

   if(component.isFocus())
     {
     console.log("不能离开 ");
      return false;
     }
     else 
   {
      console.log("可以离开-")
     return true;
   }


 } 

 


}
 
 
 
  

 
