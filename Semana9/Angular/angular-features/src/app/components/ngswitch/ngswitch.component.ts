import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  estado: string = "danger";
  miInput: string = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(variable, formulario) {
    // $event.preventDefault();
    console.log("submit");
    console.log(formulario);
    console.log(variable);

  }
}
