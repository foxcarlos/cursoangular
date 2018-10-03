import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
  export class BuscarComponent implements OnInit {
  heroeBuscar: any[] = [];
  termino: string;

    constructor( private _activateRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private _router: Router) {

               }

  ngOnInit() {

    this._activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroeBuscar = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroeBuscar);
      });
  }
}
