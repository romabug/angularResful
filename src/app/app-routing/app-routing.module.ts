import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
// import {MyfooterComponent} from '../myfooter/myfooter.component';
// import {HeaderComponent} from '../header/header.component';
// import {TestComponent} from '../test/test.component';
// import {DetailsComponent} from '../details/details.component';
// import {Details2Component} from '../details2/details2.component';
// import {Son1Component} from '../son/son1/son1.component';
// import {Forms1Component} from '../forms1/forms1.component';
// import {Forms2Component} from '../forms2/forms2.component';
// import {DataBindComponent} from '../data-bind/data-bind.component';
// import {FuzhuOutletComponent} from '../fuzhu-outlet/fuzhu-outlet.component';
// import {RxjsComponent} from '../rxjs/rxjs.component';
// //倒入路由守卫，非组件 TestGuard需要加入到module provider
// import {TestGuard, TestGuard2} from '../guard/test.guard';
// import {LeaveGuard} from '../guard/candeactivate.guard';
// //import { StockResolve } from '../guard/resolve.guard';
//
// ////////////////////////////////
// import {Details3Component} from '../details3/details3.component';
// import {TongxinComponent} from '../tongxin/tongxin.component';
// import {HooksComponent} from '../hooks/hooks.component';
// import {PeopleComponent} from '../testmodule/people/people.component';
// import {HttpComponent} from '../http/http.component';
import {JsonserverComponent} from '../jsonserver/jsonserver.component';
import {BusreportComponent} from '../busreport/busreport.component';


const routes: Routes = [

  {
    path: ''
    , component: JsonserverComponent
    ,
  }

  , {
    path: 'deshboard'
    , component: DashboardComponent

  }
  , {
    path: 'jsonserver'
    , component: JsonserverComponent,

  }

  , {
    path: 'bus'
    , component: BusreportComponent,

  },
  {
    path: '**',
     component: JsonserverComponent
    ,
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
  , exports: [
    RouterModule
  ]
  , declarations: []
})
export class AppRoutingModule {
}

