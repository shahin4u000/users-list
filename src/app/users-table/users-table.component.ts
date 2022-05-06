import { UsersService } from './users.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface IUser {
  id: number;
  name: string,
  email: string
}
@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @HostListener('window:load',['$event']) onPageLoad(event: Event) {
    this.usersService.getUsersList().subscribe( (usersList:IUser[] ) =>{
      this.setUsersListOnLocalStorage(usersList);
    })
   }
  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  dataSource: any;

  constructor(private router:Router, private usersService: UsersService) { }

  ngOnInit(): void {
    if(localStorage.getItem('usersList')){
      this.dataSource = JSON.parse( localStorage.getItem('usersList')!)
     }
  }

  onEdit(id: number){
    this.router.navigate(['user-edit', id])
  }
  onDelete(rowId: number){
    if (rowId > -1) {
      this.dataSource.splice(rowId, 1);
      this.dataSource = [...this.dataSource];
      this.setUsersListOnLocalStorage(this.dataSource);
    }

  }

  onAddNewUser(){
    this.router.navigate(['user-edit', 'new'])
  }

  setUsersListOnLocalStorage(usersList: IUser[]){
    localStorage.setItem('usersList', JSON.stringify(usersList))
  }

}
