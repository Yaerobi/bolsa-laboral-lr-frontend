import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from "../_models//users"
import { Observable } from 'rxjs';


const endPoint = 'users.json';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }
 
  getUserData(username: string): Observable<HttpResponse<User>> {
    //TODO: use username on the query
    return this.http.get<User>(
      `${environment.apiUrl}` + endPoint, {observe: 'response'});
  }
}
