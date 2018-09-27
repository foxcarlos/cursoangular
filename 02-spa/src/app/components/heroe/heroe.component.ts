import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {};
  marvel = false;
  dc = false;

  constructor( private _activateRoute: ActivatedRoute,
               private _heroesService: HeroesService) {

    this._activateRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      if (this.heroe.casa = 'Marvel') {
        this.marvel = true;
        this.dc = false;

      } else {
        this.dc = true;
        this.marvel = false;
      }
      console.log(this.heroe.casa);
    });
  }
}

