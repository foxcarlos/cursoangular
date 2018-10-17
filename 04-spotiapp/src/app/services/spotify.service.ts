import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getNewReleases() {
     const headers = new HttpHeaders({
       'Authorization': 'Bearer BQD7OGuqcEs6Ft8E4wVqXjf5z_wOaY1qDJHZmSnhluB3EgYNRb7GesD0K1ZgkMSuFu_EgcT0pLV9gsRcxt1EpkNICLNEhKJlAD7Ji6lXSfJuHQd6p7kZQjrPLc0XUnno5BKiNARDTQDw0JvH'
     });

     return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

   }

   getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD7OGuqcEs6Ft8E4wVqXjf5z_wOaY1qDJHZmSnhluB3EgYNRb7GesD0K1ZgkMSuFu_EgcT0pLV9gsRcxt1EpkNICLNEhKJlAD7Ji6lXSfJuHQd6p7kZQjrPLc0XUnno5BKiNARDTQDw0JvH'
    });

    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=AR&offset=0&limit=15`, {headers});
   }
}
