import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-busreport',
  templateUrl: './busreport.component.html',
  styleUrls: ['./busreport.component.css']
})


export class BusreportComponent implements OnInit {

  private boxOpen: boolean = true;
  private iconClass: string = 'citytable glyphicon glyphicon-collapse-up';
  private mydata: any;


  @Input()
  private mybus: any;
  @Input()
  private title: string;
  @Input()
  private mydate: string;


  constructor() {
  }

  ngOnInit() {
    console.log("work by Tony - hanchangcai@gmail.com");
  }


  private switchIcon() {
    this.boxOpen = this.boxOpen ? false : true;
    this.iconClass = this.boxOpen ? 'citytable glyphicon glyphicon-collapse-up' : 'citytable glyphicon glyphicon-collapse-down';
  }

  private getstyle(e) {
    if (e) {
      if (e < 0) return 'red';
      else if (e >= 0 && e <= 300) return 'green';
      else return 'blue';
    }
  }


}


