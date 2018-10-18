import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

  private getQuery(query: string) {
     const url = `https://api.spotify.com/v1/${query} `;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAGSo6z9fr4gOARqqWYdSNI11sVaJZsBpOnQ-O9LcHU3pGq5_oHWTeuFbtadOLCkcWpPGhUCKXV6bV5KHvy1BLIa9MCImiUb_RBz8NP4zp9J2xf-EuFovb4WvwJioP12O2v7A4lA0OsfdmX'
      });

     return this.http.get(url, {headers});
   }

  getNewReleases() {
     return this.getQuery('browse/new-releases?limit=20')
          .pipe( map( data => {
           return data['albums'].items;
         }));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?query=${ termino }&type=artist&market=AR&offset=0&limit=15`)
        .pipe( map( data => {
          return data['artists'].items;
        }));
  }
}
