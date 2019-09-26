import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  miColor: string = "blue";
  tamanio: number = 20;
  misEstilos = {
    color: 'brown',
    'font-size': '20px'
  }

  constructor() { }

  ngOnInit() {
  }

}
