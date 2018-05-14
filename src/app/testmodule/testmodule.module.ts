import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyindexComponent } from './myindex/myindex.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyindexComponent, PeopleComponent],

  //非懒加载的子模块，记得加入导出exports...   组件 MyindexComponent
  //exports 里面导出的内容，还可以作为共享模块之用。

  exports: [
    //这里必须导出一个 主组件，否则其它模块引用不到
    //PeopleComponent 不需要在这里导出，只需要放在主组件里， 让主组件来引用
    MyindexComponent
  ]

})
export class TestmoduleModule { }
