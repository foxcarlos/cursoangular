import { Injectable } from '@angular/core';
import { Lista } from '../../models/lista.model';


@Injectable()
export class DeseosProvider {

  listas: Lista[] = [];
  constructor() {

    this.cargarStorage();
    
    /*const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Heroes a vencer');

    this.listas.push(lista1, lista2);
    console.log(this.listas);*/
    
  }

  borrarLista(lista: Lista){
    // realmente no se borra, solo se excluye la lista pasada y guardando de nuevo la lista menos esa que pase

    this.listas = this.listas.filter( listaData => {
      return listaData.id != lista.id
    });

    this.guardarStorage();

  }

  agregarLista( lista: Lista) {
    this.listas.push( lista )
    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem( 'data', JSON.stringify(this.listas) );

  }

  cargarStorage() {
    let dataLocalStorage = localStorage.getItem('data');

    if( dataLocalStorage ){
      this.listas = JSON.parse( dataLocalStorage );
    }
    

  }

}
