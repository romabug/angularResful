import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MyfooterComponent } from '../myfooter/myfooter.component';
import { HeaderComponent } from '../header/header.component';
import { TestComponent } from '../test/test.component';
import { DetailsComponent } from '../details/details.component';
import { Details2Component } from '../details2/details2.component';
import { Son1Component } from '../son/son1/son1.component';
import { Forms1Component } from '../forms1/forms1.component';
import { Forms2Component } from '../forms2/forms2.component';
import { DataBindComponent } from '../data-bind/data-bind.component';
import { FuzhuOutletComponent } from '../fuzhu-outlet/fuzhu-outlet.component';
import { RxjsComponent } from '../rxjs/rxjs.component';



const routes: Routes = [{
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'deshboard',
    component: DashboardComponent,
  },

  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
    //子路由， 记得加 2级 router-outlet
    children: [{
        path: 'son1',
        component: Son1Component,
      },
      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: '',
        component: Son1Component,
      },
      {
        path: '**',
        component: TestComponent,
      },

    ]

  },
  { //带参数路由
    path: 'details2/:name',
    component: Details2Component,
  },
  {
    path: 'head',
    component: HeaderComponent,
  },
  {
    path: 'foot',
    component: MyfooterComponent,
  },
    {
    path: 'rxjs',
    component: RxjsComponent,
  },

  {
    //辅助路由1

    //链接写法 <a [routerLink]="[{outlets: {primary: 'deshboard', aux: 'fuzhu'}}]">进入辅助路由1</a>
    // 关闭   <a [routerLink]="[{outlets: {aux: null}}]">关闭辅助路由</a>

    path: 'fuzhu',
    component: FuzhuOutletComponent,
    outlet: 'aux'
  },
  {
    //辅助路由2
    path: 'details',
    component: DetailsComponent,
    outlet: "aux"
  },



  {
    path: 'form1',
    component: Forms1Component,
  },

  {
    path: 'form2',
    component: Forms2Component,
  },

  {
    path: 'databind',
    component: DataBindComponent,
  },

  {
    //重定向路由
    path: 'xx',
    redirectTo: '/foot',
    pathMatch: 'full'
  },
  { //访问不到的路由，错误匹配路由
    path: '**',
    component: TestComponent,
  }



];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}


// 页面内 通过 按钮事件来跳转
// constructor(private router: Router) {};
// toTest() {
//   console.log("to test() runing..");
//   this.router.navigate(['/test']);

// }
