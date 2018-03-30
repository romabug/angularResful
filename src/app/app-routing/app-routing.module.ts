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



const routes: Routes = [{
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
    //自路由， 记得加 2级 router-outlet
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
    path: 'form1',
    component: Forms1Component,
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
