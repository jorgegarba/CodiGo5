import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  @Output() emisor = new EventEmitter<void>();

  ngOnInit() {}

  emitir(){
    this.emisor.emit();
  }

}
