import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Aula } from './../../modelos/Aula';

@Component({
  selector: 'app-aula-card',
  templateUrl: './aula-card.component.html',
  styleUrls: ['./aula-card.component.css']
})
export class AulaCardComponent implements OnInit {

  @Input() aulaCard:Aula;

  @Output() emisor:EventEmitter<Aula>;  

  constructor() {
    this.emisor = new EventEmitter();
  }

  ngOnInit() {
  }

  disparar(){
    console.log("Disparando desde el hijo");
    this.emisor.emit(this.aulaCard);
  }

}
