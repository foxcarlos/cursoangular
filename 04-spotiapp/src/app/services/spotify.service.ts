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

  getQuery(query: string) {
     const url = `https://api.spotify.com/v1/${query} `;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDVHgFj3N7i1RO15e8-I5oN86JGDbS9IRl28pWgTOtQu9t5_HoC9IImBoQwJjrMtUVtLHtrfL4oL_r2MheIdRLH_piQWqFIwks3JcmQFRdGRBR3iKqRwgMG2SBz4hYsLlKDnFWHsFzQl4LM'
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
