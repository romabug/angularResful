import { Component, OnInit } from '@angular/core';
import {Myser, Myser2} from '../myservice.service';
import {myaaa} from '../mygloble';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public myser1:Myser, public myser2:Myser2) {

  }

  private tmpa = myaaa.aa;


  ngOnInit() {
 



  }

}
