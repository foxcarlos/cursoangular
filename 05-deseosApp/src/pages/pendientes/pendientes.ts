import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';



@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  borrar: any = {};


  constructor(public deseosProvider: DeseosProvider,
              private navCtrl: NavController,
              public alertCtrl: AlertController) {
  }

  listaSeleciconada( lista: Lista){
    console.log(lista);
    
    this.navCtrl.push(AgregarPage, {
      titulo: lista.titulo,
      lista: lista
    });
    
  }

  borrarLista(lista: Lista){
    this.deseosProvider.borrarLista(lista);
  }
  
  agregar_lista(){

    // this.navCtrl.push(AgregarPage);
    const alerta = this.alertCtrl.create({
      title: 'Nueva lista',
      message: 'Nombre de la nueva lista',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar',
        handler: data=>{
          console.log('Se cancelo');
        }
      },{
        text: 'Agregar',
        handler: data=>{
          if (!data.titulo) {
            console.log('vacio');
            return;
          }
          console.log(data.titulo);
          this.navCtrl.push(AgregarPage, {
            titulo: data.titulo
          });
          
        }
      }]
    });

    alerta.present();
  }

  

}
