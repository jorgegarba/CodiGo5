import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  enlinea: boolean = false;

  constructor() {
    this.enlinea = navigator.onLine;

    window.addEventListener('online', () => {
      this.enlinea = navigator.onLine;

    });
    window.addEventListener('offline', () => {
      this.enlinea = navigator.onLine;

    });


  }

  @Output() emisor = new EventEmitter<void>();

  ngOnInit() { }

  emitir() {
    this.emisor.emit();
  }

}
