import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
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

  displayedColumns: string[] = ['id', 'name', 'email', 'action'];
  dataSource: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsersList().subscribe( (usersList:IUser[] ) =>{
      this.dataSource = usersList
    })
  }

  onEdit(id: number){
    


  }
  onDelete(rowId: number){
    if (rowId > -1) {
      this.dataSource.splice(rowId, 1);
      this.dataSource = [...this.dataSource]; // new ref!
    }

  }

}
