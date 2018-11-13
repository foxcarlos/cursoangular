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
    const alerta = this.alertCtrl.create({
      title: 'Editar nombre',
      message: 'Editar el nombre de la lista',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nuevo nombre',
        value: lista.titulo
      }],
      buttons: [{
        text: 'Cancelar',
        handler: data=>{
          console.log('Se cancelo la edicion');
        }
      },{
        text: 'Guardar',
        handler: data=>{
          if (!data.titulo) {
            console.log('No se indico ningun nombre a la lista');
            return;
          }
          console.log(data.titulo);
          lista.titulo = data.titulo;
          this.deseosProvider.guardarStorage();
        }
      }]
    });
    alerta.present();
    
  }
}