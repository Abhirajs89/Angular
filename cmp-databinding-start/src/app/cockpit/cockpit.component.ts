import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(NameInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName: NameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(NameInput:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: NameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
