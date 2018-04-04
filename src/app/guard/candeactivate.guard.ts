import { CanDeactivate } from '@angular/router';
import { TestComponent } from '../test/test.component';

 

//和 CanActivate 的参数和调用都不一样。
//必须 指定 要离开的那个 组件对象
export class LeaveGuard implements CanDeactivate<TestComponent> {
 
//主意canDeactivate 小写
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
 
 
 
  

 
