import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export interface Bus {
  busId: string;
  routeVariant: string;
  deviationFromTimetable: number;
}


@Component({
  selector: 'app-jsonserver',
  templateUrl: './jsonserver.component.html',
  styleUrls: ['./jsonserver.component.css']
})
export class JsonserverComponent implements OnInit {
  constructor(private http: HttpClient) {

  }

  private tmp: any;
  private myurl: string;
  private mydata: any;


  ngOnInit() {


    this.myurl = 'http://localhost:3000/data';

    this.tmp = this.http
      .get(this.myurl)
      .map(data => data)
      .subscribe(
        data => {
      //    console.log(data);
          this.mydata = data;

        }
        , (err) => {
          console.log('i am error');
        }
      );


  }
}
