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
      'Authorization': 'Bearer BQA0hEN2Ln2THtEBMSnWl96u12z0QvsjKP7LQ6iG-aS-52esi-KyBOxa8EufcCYrIBVOhbs6dtTcH8tFHdHW582RJ_RM9gmhyDlBHMFv-Q4_zFM6bDbDIH1WJq6lFLADhIXaYuGaP0xInXh8'
      });

     return this.http.get(url, {headers});
   }

  getNewReleases() {
     return this.getQuery('browse/new-releases?limit=20')
          .pipe( map( data => {
           return data['albums'].items;
         }));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?query=${ termino }&type=artist&market=AR&offset=0&limit=15`)
        .pipe( map( data => {
          return data['artists'].items;
        }));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }
}
