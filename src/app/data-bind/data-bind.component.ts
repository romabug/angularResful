import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  constructor() {}

  /////////css CLASS 操作///////////////

  //插值绑定
  private firstid: string = "myFirstID";
  private firstclass: string;

  testFirstclass(): void {
    this.firstclass = "c1 c2";
    //alert("ddd");
  }

  //dom属性绑定
  private secclass: string;
  private spanclass: any = {
    c1: true,
    c2: false,
    c3: false,
    bg: false
  };


  test2class(): void {
    this.secclass = "c1 c3";
  }

  returnClass(): string {
    return "c3"
  }


  Dospanclass(): void {
    this.spanclass = {
      c1: true,
      c2: true,
      c3: true,
      bg: true
    }
  }


  /////////END UP -- css CLASS 操作///////////////




  /////////$event 事件绑定操作///////////////
  private mytest: string = "hi mytest is tony";
  private saved: boolean = true;
  private getusername: string;
  private gotinfo: any = {
    innertext: " i am innertext",
    url: " i am url"

  }

  private aa: string = "url google";
  getevent(e: any): void {
    // this.aa = e.target.value; formAction
    console.log(e);
    console.log(e.target.innerText);
    console.log(e.target.formAction);
    this.gotinfo.url = e.target.formAction;
    this.gotinfo.innertext = e.target.innerText;
  }

  /////////////////////////////////

  /////////INPUT 属性绑定/////////////// 
  private value_a: string = "default value from controler "
  changeme(e:any): void {
    this.value_a = e.target.value;
  }

showValuea(): void { alert(this.value_a);
 this.value_a = "00000"; };

  /////////////////////////////////




  ////模版表单数据接受操作/////////////////////////////
  private gotinfo2: any;

  createUser(info: any): void {

    this.gotinfo2 = info; //指针指向 info 对象
    console.log(info);
    console.log("myusername--" + info.myusername);
    console.log("passwordGROUP--" + info.passwordGROUP.mypass);
    // alert(info.myusername); 

  }

  changeEmail(): void {
    this.gotinfo2.myemail = "myemail got changed.. ok";
    console.log("myemail--" + this.gotinfo.myemail);
  }

  showAlert(): void {
    //	this.mytest = "hollow my"; 
    alert("mytest--" + this.mytest + "--saved--" + this.saved);

  }
  //////////////////////////////////////////////////






  ngOnInit() {


  }



}
