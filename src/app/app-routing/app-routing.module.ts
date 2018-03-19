import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MyfooterComponent } from '../myfooter/myfooter.component';
import { HeaderComponent } from '../header/header.component';
import { TestComponent } from '../test/test.component';

const routes: Routes = [
{
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'test',
    component: TestComponent,
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
