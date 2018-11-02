import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { Lista } from '../../models/lista.model';


@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosPage {

  constructor(public deseosProvider: DeseosProvider) {
  }

  listaSeleciconada( lista: Lista){
    console.log(lista);
    
  }


}