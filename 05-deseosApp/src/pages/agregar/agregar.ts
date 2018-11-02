import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { Lista } from '../../models/lista.model';
import { NavParams } from 'ionic-angular';
import { ListaItem } from '../../models';


@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  lista: Lista;
  nombreItem: string = '';

  constructor( public deseosProvider: DeseosProvider,
               private navParams: NavParams) {
    const titulo = this.navParams.get('titulo');
    this.lista = new Lista( titulo );
  }

  agregarItem(){
    if (!this.nombreItem) {
      return;
    }
    console.log(this.nombreItem);
    
    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );
    
    this.nombreItem = '';
  }

  actualizarTarea( item: ListaItem ){
    item.completado = !item.completado;
  }

}
