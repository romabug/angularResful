import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-son1',
  templateUrl: './son1.component.html',
  styleUrls: ['./son1.component.css']
})
export class Son1Component implements OnInit {

  constructor(private routeInfo: ActivatedRoute) {}

private sellerId:number;

  private stockName: string;

  ngOnInit() {
  //  this.stockID = this.routeInfo.snapshot.queryParams["id"];
  //  this.stockName = this.routeInfo.snapshot.queryParams["name"];
  }

}
