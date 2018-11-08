import { Component, Input } from '@angular/core';
import { DeseosProvider } from '../providers/deseos/deseos';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar';
import { Lista } from '../models';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html',
})
export class ListasComponent {
  
  @Input() terminada: boolean = false;
  
  constructor( public deseosProvider: DeseosProvider,
                private navCtrl: NavController,
                private alertCtrl: AlertController) {
  }
  
  listaSeleciconada( lista: Lista){
    console.log(lista);
    
    this.navCtrl.push( AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });
    
  }

  borrarLista(lista: Lista){
    this.deseosProvider.borrarLista(lista);
  }

  editarLista(lista: Lista){
    console.log(lista.titulo);
    
  }
}