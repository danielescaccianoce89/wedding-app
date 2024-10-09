import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  // @ViewChild('mainContent') mainContent!: ElementRef<any>;

  // @Output() mainContentHeightEmitter: EventEmitter<number> = new EventEmitter<number>();

  // ngOnInit(): void {
  //   console.log("emit value")
  //   debugger
  //   this.mainContentHeightEmitter.emit(22);
  // }

}
