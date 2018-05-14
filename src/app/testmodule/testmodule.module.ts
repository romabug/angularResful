import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyindexComponent } from './myindex/myindex.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyindexComponent],

  //子模块，记得加入导出exports...   组件 MyindexComponent
  exports: [
    MyindexComponent
  ]

})
export class TestmoduleModule { }
