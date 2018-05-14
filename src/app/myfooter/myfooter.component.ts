import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-myfooter',
  templateUrl: './myfooter.component.html',
  styleUrls: ['./myfooter.component.css'],

  animations: [
    trigger('visibilityChanged', [
      state('true', style({opacity: 1, transform: 'scale(1.0)'})),
      state('false', style({opacity: 0.5, backgroundColor: 'yellow', transform: 'scale(0.5)'})),
      transition('1 => 0', animate('1000ms')),
      transition('0 => 1', animate('500ms'))
    ])
  ]


})
export class MyfooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  private isshow: boolean = true;

  anniDiv() {
    this.isshow = !this.isshow;
  }


}
