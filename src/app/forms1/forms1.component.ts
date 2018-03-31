import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component implements OnInit {

private getusername:string;

createUser (info:any):void {
  console.log(info);
    console.log("myusername--" + info.myusername);
    console.log("passwordGROUP--" + info.passwordGROUP.mypass);
 // alert(info.myusername);  

}

  constructor() {  }

  ngOnInit() {


  }




}
