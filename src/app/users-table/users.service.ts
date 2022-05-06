import { IUser } from './users-table.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  restUrl: string ='https://jsonplaceholder.typicode.com/users';
  constructor( private http: HttpClient) {}

  public getUsersList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.restUrl);
  }
}
