import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details3',
  templateUrl: './details3.component.html',
  styleUrls: ['./details3.component.css']
})
export class Details3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   private stock  = {id:4, name:"alibaba333"};


}


 


// export class Stock {

// private id: number;
// private name: string;
// 	constructor(public id:number, public name:string){

//      this.id = id;
// 	  this.name = name;
// 	}

// }