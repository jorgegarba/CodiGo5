import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  entrarSalita(){
    this._router.navigate(['/sala']);
  }

}
