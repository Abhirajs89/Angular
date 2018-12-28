import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();

  interval;
  counter = 0;
  constructor() { }

  ngOnInit() {
    
  }

  onStartGame(){
      //alert("test")
      //console.log("alert")
      this.interval = setInterval(() => {
      this.intervalFired.emit(this.counter+1);
      this.counter++;
    }, 1000);
  }

  onPauseGame(){
    //console.log("onPauseGame");
    clearInterval(this.interval);
  }
}
