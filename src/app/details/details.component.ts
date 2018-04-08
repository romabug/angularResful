import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details'
  , templateUrl: './details.component.html'
  , styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private routeInfo: ActivatedRoute) {}

  //从父组件传入数据
  //记得import Input
  @Input()
  private mydog: string;
  @Input()
  private mycat: string;



  showanimals(): void {
    let str: string = "mydog is--" + this.mydog + "--" + "mycat is--" + this.mycat;
    alert(str);
  }


  //从前一页通过url传入参数
  private stockID: number;
  private stockName: string;

  ngOnInit() {
    this.stockID = this.routeInfo.snapshot.queryParams["id"];
    this.stockName = this.routeInfo.snapshot.queryParams["name"];

    // setInterval()(
    //   () => { let aa: any = 1000 * Math.random() } ,3000 )


  }

}



//从字组件广播出去的数据

export class stockInfo {
  constructor(public name: string, public price: number) {

  }


}
