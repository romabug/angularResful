import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {OrderComponent} from './order/order.component';

//const routes: Routes = [];

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },

  {
    path: 'order',
    component: OrderComponent
  },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})




export class ProductRoutingModule { }
