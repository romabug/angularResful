import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  onkey(input: string): void {
    console.log(input);
  }



  constructor() {

    //被观察对象 Observable -- 流，数组 
    Observable.from([1, 2, 3, 4, 5])

      .filter(e => e % 2 == 0) //对流的Operators－－ filter操作
      .map(e => e * e) //对流的Operators－－运算逻辑炒作

      // 监听流的行为－订阅称，之为观察者Observer
      .subscribe(
        e => console.log(e), //必要动作
        //底下2个是可选动作 
        err => console.error(err),
        () => console.log("结束了..") //流发射结束后运行
      );



  }

  ngOnInit() {}

}
