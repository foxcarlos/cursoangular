import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor(private spotify: SpotifyService, ) {
    console.log('Contructor del home hecho');
    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log( data );
        this.nuevasCanciones = data;
      });
   }
   ngOnInit() {
  }
}
