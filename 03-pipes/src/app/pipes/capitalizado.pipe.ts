import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, args1): any {
        console.log(value);
        console.log(args1);

        value = value.toLowerCase();
        // let nombres = value.split(' ');
        return value.split(' ');
    }
}
