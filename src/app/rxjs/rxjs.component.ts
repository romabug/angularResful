import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/Rx';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  // FormControl
  searchInput: FormControl = new FormControl();


  constructor() {

    ////////测试响应式编程/////////////////////

  //  被观察对象 Observable -- 流，数组
    Observable.from([1, 2, 3, 4, 5])

      .filter(e => e % 2 == 0) //对流的Operators－－ filter操作
      .map(e => e * e) //对流的Operators－－运算逻辑炒作

      // 监听流的行为－订阅称，之为观察者Observer
      .subscribe(
        e => console.log(e), //必要动作
        //底下2个是可选动作
        err => console.error(err),
        () => console.log('结束了..') //流发射结束后运行
      );

    ////////////////////////////////////////////////////////

  }


  onkey(input: string): void {
    console.log(input);
  }


  ngOnInit() {

    /// 延迟响应////仅下面2行//
    this.searchInput.valueChanges
      .debounceTime(500)
      .filter(e => parseInt(e) > 100)
      .filter(e => parseInt(e) < 999)
      .map(e => {
        if (parseInt(e) > 500) {
          e = e + 'up 500';
        } else
          e = this.addme(e);
        return e;

      })
      .map(e => e + '@@@@')
      .subscribe(
        e => this.getStockInfo(e),
        err => console.error(err),
        () => console.log('the end..') //流发射结束后运行

      );

  }


  addme(value: string): any {
    return value + 'done done';
  };


  //private mytmp:Array<string> =[];
  private mytmp: string[] = [];

  getStockInfo(value: string) {

    this.mytmp.push(value);
    console.log(this.mytmp);
  }


}
