import { IUser } from './../users-table/users-table.component';
import { UsersService } from './../users-table/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  public userForm: FormGroup =this.fb.group({
    id: [''],
    name: ['', Validators.required],
    email: ['', Validators.email],
  });

  constructor(private fb: FormBuilder,
    private userService: UsersService,
    private activateRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      if (data['id'] === 'new') {
        this.userForm = this.fb.group({
          id: new FormControl(''),
          name: new FormControl(''),
          email: new FormControl(''),
        })

      } else {
        this.loadUserDetails(data['id']);

      }
    })

  }

  loadUserDetails(id: number) {
    let userEntry: IUser = this.userService.getUserEntry(id);
    if (userEntry && userEntry.id) {
      this.userForm.setValue({
        'id': userEntry.id,
        'name': userEntry.name,
        'email': userEntry.email,
      })
    }
  }

  onSubmit(formData: FormGroup) {
    if(formData.value.id){
      this.userService.onUpdateUserEntry(this.userForm.value);
    } else {
      this.userService.onAddNewUserEntry(formData.value);
    }
    this.onBack();
  }

  onBack() {
    this.location.back()
  }

}
