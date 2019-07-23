import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:String = "Mi Primera Aplicación en Angular";
  descripcion:String = "Primer parrafo de la app";
}
