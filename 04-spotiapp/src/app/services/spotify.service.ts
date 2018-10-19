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
      'Authorization': 'Bearer BQCgL6iySc0RDT8l8tT8RbDE4-hbXrK-vKYppA-jUTnVbj9GocWgSjII6SwkOAdnj7f-zsnMVXSIJOzfnOpv5K-k-A5aCxXOfqrzqs4G41ZWakLlfNbkixY8YDXGrHoqP1zROQzp--uSsTmq'
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
