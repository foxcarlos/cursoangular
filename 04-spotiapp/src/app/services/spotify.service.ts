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
       'Authorization': 'Bearer BQDnj9ocDfsk-mQujOUnYCb2dgQrcz1ljIIQCPZ7chfJ7pZUSdsENk5GWkm5nU-r5qj0-hrQ0oeoxMVMKRM'
     });

     this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
       .subscribe( data => {
         console.log(data);
       });

   }
}
