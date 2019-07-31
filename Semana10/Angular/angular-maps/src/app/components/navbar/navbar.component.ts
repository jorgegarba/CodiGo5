import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private _sRouter:Router) { }

  ngOnInit() {
  }

  buscar(e,termino){
    e.preventDefault();
    if(termino==="crear"){
      return;
    }
    this._sRouter.navigate(['/lugares',termino]);
  }

}
