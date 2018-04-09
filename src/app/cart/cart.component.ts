import { Component, OnInit,Input } from '@angular/core';
import {StockInfo} from '../details/details.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input()
private tmpcat:string;

@Input()
private stockInfo:StockInfo ;


}
