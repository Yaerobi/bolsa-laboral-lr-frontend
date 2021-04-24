import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


const endPoint = 'users.json';
const endPoint2 = 'assets/data/users.json';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }
 
  getUserData(){
    //const values =  this.http.get(`${environment.apiUrl}` + endPoint);
    return this.http.get(endPoint2);
  }
}
