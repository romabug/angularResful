import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details2',
  templateUrl: './details2.component.html',
  styleUrls: ['./details2.component.css']
})
export class Details2Component implements OnInit {
 
constructor(private routeInfo: ActivatedRoute) {}


  private stockID: number;
  private stockName: string;

  ngOnInit() {
   // this.stockID = this.routeInfo.snapshot.params["id"];
     this.stockName = this.routeInfo.snapshot.params["name"];
   }


}
