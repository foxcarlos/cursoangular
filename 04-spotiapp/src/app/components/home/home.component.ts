import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';
import { SpotifyService } from '../../services/spotify.service';
import { LoadingComponent } from '../shared/loading/loading.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  msg_error: string;

  constructor(private spotify: SpotifyService, ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        console.log( data );
        this.nuevasCanciones = data;
        this.loading = false;
      }, ( errorServicio ) => {
        this.error = true;
        this.loading = false;
        console.log(errorServicio.error.error.message);
        this.msg_error = errorServicio.error.error.message;
      });

   }
   ngOnInit() {
  }
}
