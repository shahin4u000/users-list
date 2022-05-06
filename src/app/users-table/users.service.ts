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

  setUsersListOnLocalStorage(usersList: IUser[]){
    localStorage.setItem('usersList', JSON.stringify(usersList))
  }

  getUsersListFromLocalStorage(){
    if(localStorage.getItem('usersList')){
      return JSON.parse( localStorage.getItem('usersList')!)
     }
  }

  getUserEntry(id: number){
    let userEntry: any;
    let usersEntry = JSON.parse( localStorage.getItem('usersList')!)
    if(usersEntry){
      usersEntry.map( (user: any)=>{
        if(user.id == id){
          userEntry = user;
        }
      })
    }
    return userEntry;
  }

  onUpdateUserEntry(userEntry:IUser){
    let usersEntry = JSON.parse( localStorage.getItem('usersList')!)
    usersEntry.forEach((entry:IUser, index: number) => {
        if (entry.id === userEntry.id) {
          usersEntry[index] = userEntry
        }
      })
    this.setUsersListOnLocalStorage(usersEntry);

  }
  onAddNewUserEntry(userEntry: IUser){
    if(userEntry.email && userEntry.name){
      let usersList:IUser[] = this.getUsersListFromLocalStorage();
      userEntry.id = usersList.length+1;
      usersList.push(userEntry);
      this.setUsersListOnLocalStorage(usersList);
    }


  }

}
