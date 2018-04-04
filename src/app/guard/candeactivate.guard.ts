import { CanActivate } from '@angular/router';
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




export class TestGuard implements CanActivate {
  private aa = "the value--";
  canActivate() {
    let hasright: boolean = Math.random() > 0.5;
    if (!hasright) {
      alert(this.aa + hasright + "-TestGuard--not, DONT come in...");
      return false;
    } else {
      alert(this.aa + hasright + "-TestGuard--yes, please come to foot");
      return true;
    }
  }
}
 


export class TestGuard2 implements CanActivate {
 
  private bb: boolean = true;
  canActivate() {
    if (this.bb) {
      alert(this.bb + "-TestGuard 2--true, JUST come in...");
      return true;
    } else {
      alert(this.bb + "-TestGuard 2--false, NOT NOT ...");
      return false;
       
    }
  }


 
  

}
