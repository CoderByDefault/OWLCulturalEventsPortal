import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


getEventItems(){
  return this.http.get('http://localhost:3000/api/items')
  .pipe(map(res => res));
}

addEventItem(newItem){
  let headers = new HttpHeaders();

  headers.append('content-type','application/json');
  return this.http.post('http://localhost:3000/api/item',newItem, {headers: headers})
  .pipe(map(res => res));
}
}