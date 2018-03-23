import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MyfooterComponent } from '../myfooter/myfooter.component';
import { HeaderComponent } from '../header/header.component';
import { TestComponent } from '../test/test.component';
import { DetailsComponent } from '../details/details.component';
import { Details2Component } from '../details2/details2.component';



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
  },
    {
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
