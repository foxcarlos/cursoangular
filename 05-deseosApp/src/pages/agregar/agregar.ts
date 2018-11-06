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

    // Verificar si es una lista nueva o si 
    // se presiono click en una lista existente
    if( this.navParams.get('lista') ){
      this.lista = this.navParams.get('lista');
    }else {
      this.lista = new Lista( titulo );
      this.deseosProvider.agregarLista ( this.lista );
    }

  }

  agregarItem(){
    if (!this.nombreItem) {
      return;
    }
    console.log(this.nombreItem);
    
    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );
    
    this.deseosProvider.guardarStorage();
    
    this.nombreItem = '';
  }

  actualizarTarea( item: ListaItem ){
    item.completado = !item.completado;

    const pendientes = this.lista.items.filter( itemData =>{
      return !itemData.completado;
    }).length;
   
    console.log(pendientes);
    if( pendientes === 0){
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    }else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }
    this.deseosProvider.guardarStorage();

  }

  borrar(index: number){
    this.lista.items.splice( index, 1 );
    this.deseosProvider.guardarStorage();
  }

}
