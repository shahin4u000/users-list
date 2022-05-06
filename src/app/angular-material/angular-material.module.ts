import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
const materialModule = [
  MatTableModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModule
  ],
  exports: [
    ...materialModule
  ]
})
export class AngularMaterialModule { }
