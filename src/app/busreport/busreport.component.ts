import {Component, Input, OnInit} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
// import {InputDecorator} from '@angular/core/src/metadata/directives';

// export interface Bus {
//   busId: string;
//   routeVariant: string;
//   deviationFromTimetable:number;
// }


@Component({
  selector: 'app-busreport',
  templateUrl: './busreport.component.html',
  styleUrls: ['./busreport.component.css']
})


export class BusreportComponent implements OnInit {

  private boxOpen: boolean = true;
  private iconClass: string = 'citytable glyphicon glyphicon-collapse-up';

  switchIcon() {
    this.boxOpen = this.boxOpen ? false : true;
    this.iconClass = this.boxOpen ? 'citytable glyphicon glyphicon-collapse-up' : 'citytable glyphicon glyphicon-collapse-down';
  }


  private mydata: any;

  //  private mybus:Array<Bus>;


  @Input()
  private mybus: any;

  @Input()
  private title: string;
  @Input()
  private mydate: string;


  constructor() {
  }


  ngOnInit() {

  //this.title = this.title + "88888";
    console.log('<<<<<<<<<');
    console.log(this.mybus);

  }


  getstyle (e) {

    if (e) {
      if (e < 0) return 'red';
      else if (e >= 0 && e <= 300) return 'green';
      else return 'blue';
    }

  }




}


