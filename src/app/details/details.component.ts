import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private routeInfo: ActivatedRoute) {}


  private stockID: number;
  private stockName: string;

  ngOnInit() {
    this.stockID = this.routeInfo.snapshot.queryParams["id"];
    this.stockName = this.routeInfo.snapshot.queryParams["name"];
  }

}
