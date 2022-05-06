import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserEditRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class UserEditModule { }
