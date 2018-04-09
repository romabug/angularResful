import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { DetailsComponent } from './details/details.component';
import { Details2Component } from './details2/details2.component';
import { Son1Component } from './son/son1/son1.component';
import { Forms1Component } from './forms1/forms1.component';
import { Forms2Component } from './forms2/forms2.component';
import { DataBindComponent } from './data-bind/data-bind.component';
//倒入路由守卫，非组件...TestGuard需要加入 provider, router里也要引用
import { TestGuard, TestGuard2 } from './guard/test.guard';
import { LeaveGuard } from './guard/candeactivate.guard';
////////
import { FuzhuOutletComponent } from './fuzhu-outlet/fuzhu-outlet.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// import { StockResolve } from './guard/resolve.guard';
 import { Details3Component} from './details3/details3.component';
 import { TongxinComponent } from './tongxin/tongxin.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyfooterComponent,
    DashboardComponent,
    TestComponent,
    DetailsComponent,
    Details2Component,
    Son1Component,
    Forms1Component,
    Forms2Component,
    DataBindComponent,
    FuzhuOutletComponent,
    TongxinComponent,  
    CartComponent,  
    RxjsComponent,
    Details3Component  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // 路由
    FormsModule, //模版表单
    ReactiveFormsModule //响应式编程模块，可用于响应式表单

  ],
  providers: [TestGuard, TestGuard2, LeaveGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
