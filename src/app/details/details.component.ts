import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details'
  , templateUrl: './details.component.html'
  , styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private routeInfo: ActivatedRoute) {}

  //从父组件传入数据
  //记得import Input  Output
  @Input()
  private mydog: string;
  @Input()
  private mycat: string;



  showanimals(): void {
    let str: string = "mydog is--" + this.mydog + "--" + "mycat is--" + this.mycat;
    alert(str);
  }







//////////////////////////////////////////////
  //从前一页通过url传入参数
  private stockID: number;
  private stockName: string;

private mystock: StockInfo;
 
//eventEmitter 事件发射器 searchResult成为一个事件
@Output()
searchResult: EventEmitter<StockInfo> = new EventEmitter(); 



  ngOnInit() {

    //路由传参数
    this.stockID = this.routeInfo.snapshot.queryParams["id"];
    this.stockName = this.routeInfo.snapshot.queryParams["name"];


///////////////for out put///////////// 
//Output,EventEmitter必须声明 from '@angular/core';
 
    setInterval( ()=>{
    let tmp:string  = this.mydog;
        
    let stockInfo: StockInfo = new StockInfo(tmp, 100*Math.random());
    this.mystock = stockInfo;
  
   ////////发射给父组件
   this.searchResult.emit(stockInfo);
   //  console.log("i am setInterval-", stockInfo);
    
   }, 2000  )

  }

}


///////////////for out put/////////////
//从字组件广播出去的数据

export class StockInfo {
  constructor(public name: string, public price: number) {

  }


}
