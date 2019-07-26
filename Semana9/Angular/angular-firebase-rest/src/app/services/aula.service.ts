import { Injectable } from '@angular/core';
import { Aula } from '../modelos/Aula';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  url: string = "https://canchitas-b1d33.firebaseio.com";

  constructor() { }

  getAulas():Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/aulas.json`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          //transformar el json en un arreglo de objetos
          let aulas = this.crearArregloDeAulas(json);
          resolve(aulas);
        });
    })
  }

  /**
   * Función que recibe un json de aulas y retorna
   * un arreglo de objetos Aula
   * @param json 
   */
  crearArregloDeAulas(json:any):Array<Aula>{
    let aulas:Array<Aula> = [];
    for (const llave in json) {
      let objAula:Aula =  new Aula();
      objAula.id = llave;
      objAula.capacidad = json[llave].capacidad;
      objAula.nro = json[llave].nro;
      objAula.pabellon = json[llave].pabellon;
      objAula.tipo = json[llave].tipo;
      aulas.push(objAula);
    }
    return aulas;
  }

}
