import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { DetailsComponent } from './details/details.component';
import { Details2Component } from './details2/details2.component';
import { Son1Component } from './son/son1/son1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyfooterComponent,
    DashboardComponent,
    TestComponent,
    DetailsComponent,
    Details2Component,
    Son1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
