import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  imports: [
    CommonModule,
    // angular cli 建好后的模块，自动导入ProductRoutingModule模块自带的路由
    //并在   declarations: [ListComponent, OrderComponent] 里声明了组件，变完成了模块的链接工作
    //声明forChild()的自模块中， 中没有注入器配置，只有像 RouterOutlet 和 RouterLink 这样的指令

    ProductRoutingModule
  ],
  declarations: [ListComponent, OrderComponent]
})
export class ProductModule { }
