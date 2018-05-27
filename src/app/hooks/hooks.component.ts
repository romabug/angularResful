import { Component, OnInit } from '@angular/core';
import {Myser} from '../myservice.service';
import {myaaa} from '../mygloble';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  private aa:string = myaaa.aa;

  constructor(private ser1:Myser) { }

  ngOnInit() {
  }

  updateser1 (){
    this.ser1.name = "updated by hook component";
    myaaa.aa = "myaaa updated by hook"
  }


}
