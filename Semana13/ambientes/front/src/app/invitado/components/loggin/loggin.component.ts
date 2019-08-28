import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  constructor(private _sAuth: AuthService,
    private _sRouter: Router) { }

  ngOnInit() { }

  iniciarSesion(email, password) {
    this._sAuth.login(email, password).subscribe((data: any) => {
      if (data.token) {
        this._sAuth.saveToken(data.token);
        this._sRouter.navigate(['/logged']);
      } else {
        //error al iniciar sesion
      }
    })
  }

}
