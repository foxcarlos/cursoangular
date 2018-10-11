import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, args1: boolean): any {
    console.log(value, args1);
    if (args1) {
      console.log('Hay que  codificar');
      let salida = '';
      for (const letra of value) {
        salida += '*';
      }
      return salida;
    } else {
      console.log('Esta bien asi');
      return value;
    }
  }
}
