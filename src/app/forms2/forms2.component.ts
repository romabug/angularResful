import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';



@Component({
  selector: 'app-forms2'
  , templateUrl: './forms2.component.html'
  , styleUrls: ['./forms2.component.css']
})
export class Forms2Component implements OnInit {

  /*
    //formcontrol 是最基本的表单字段
    private userName = new FormControl("tony cai");

    //对象formgroup 是 form control 的集合，用于组织它们
    private passInfoGroup = new FormGroup({
      password: new FormControl(),
      passwordConfirm: new FormControl()
    });

    //formarray是数组 用于增多表单字段 formcontrol 的操作,比如输入多个邮箱
   //只能通过数组顺序号来访问
    private addEmails = new FormArray([
      new FormControl("ilovealdi@gmail.com"),
      new FormControl("romabug@gmail.com")
    ]);

*/

  private tmp = new FormControl("i am tmp");

  //@@@ 响应式表单，重点在于在这里声明表单字段的数据结构
  // formmodel 是整个表单的数据
  private myformModel: FormGroup;

  constructor() {
    //@@@ 响应式表单，重点在于在这里声明表单字段的数据结构
    // 数据结构要在  constructor 里声明
    // 可以尝试表单构造器，简化了代码 private fb:FormBuilder = new FormBuilder();

    this.myformModel = new FormGroup({

      myusername: new FormControl()
      , // myemail: new FormControl(),

      emails: new FormArray([
        new FormControl()

      ]),

      passwordInfo: new FormGroup({
        mypwd: new FormControl()
        , mypwd2: new FormControl(),

      }),

      mobile: new FormControl()
      , address: new FormControl()

    });


 //自带表单验证 ///////////

  //Validators.p




  } // end constructor


  createUser() {
    console.log(this.myformModel.value);
  };


  addEmail() {
    console.log("add emails");
    let emails = this.myformModel.get('emails') as FormArray;
    emails.push(new FormControl());
    console.log(this.myformModel.value);
  }

  ngOnInit() {}

//////／表单验证 ///////////

//自定义 myvalidate(param:AbstractControl):{[key:string ]:any} { return null; }






}
