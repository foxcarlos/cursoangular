import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Fernando';
  nombre2 = 'carlos aLberto';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19',
    }
  };

  valordePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('LLego la data'), 5500);
  });

  fecha = new Date();
  video = 'FX_cfTWBk4w';
  una_contrasena = 'miclave';
  activar = true;
}
