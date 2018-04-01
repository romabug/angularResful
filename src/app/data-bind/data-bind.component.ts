import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent implements OnInit {

  private mytest: string = "hi mytest is tony";
  private saved: boolean = true;
  private getusername: string;

  public gotinfo: any;

  createUser(info: any): void {

    this.gotinfo = info; //指针指向 info 对象
    console.log(info);
    console.log("myusername--" + info.myusername);
    console.log("passwordGROUP--" + info.passwordGROUP.mypass);

    // alert(info.myusername); 

  }


  changeEmail(): void {
    this.gotinfo.myemail = "myemail got changed.. ok";
    console.log("myemail--" + this.gotinfo.myemail);
  }


  showAlert(): void {
    //	this.mytest = "hollow my"; 
    alert("mytest--" + this.mytest + "--saved--" + this.saved);

  }




  constructor() {}

  ngOnInit() {


  }



}
