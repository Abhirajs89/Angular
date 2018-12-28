import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddnumbers : number [] = [];
  evennumbers : number [] = [];

  constructor(){
    //console.log("const")
  }

  onIntervalFired(firedNumber:number){
    console.log(firedNumber);
    if(firedNumber%2 === 0){
      this.evennumbers.push(firedNumber)
    }else{
      this.oddnumbers.push(firedNumber)
    }
  }
}
