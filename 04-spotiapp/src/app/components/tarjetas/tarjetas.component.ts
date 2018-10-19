import { Router } from '@angular/router';
import { Component, Input  } from '@angular/core';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  verArtista( item ) {
    let artistaId;

    console.log(item);
    if (item.type === 'album') {
      artistaId = item.artists[0].id;
    } else {
      artistaId = item.id;
    }

    this.router.navigate(['/artist', artistaId]);
  }

}
