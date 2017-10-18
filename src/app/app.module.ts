import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyfooterComponent } from './myfooter/myfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyfooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
