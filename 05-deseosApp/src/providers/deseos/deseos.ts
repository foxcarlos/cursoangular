import { Injectable } from '@angular/core';
import { Lista } from '../../models/lista.model';

// Plugins
import { HTTP } from '@ionic-native/http';

@Injectable()
export class DeseosProvider {

  listas: Lista[] = [];
  constructor(private http: HTTP) {
    
    const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Heroes a vencer');

    this.listas.push(lista1, lista2);
    console.log(this.listas);
    
  }

  getHttp(){
    this.http.get('ec2-18-236-66-28.us-west-2.compute.amazonaws.com:8069/intranet/car9796220', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);
      })
    .catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);
    
      });
  }

}
