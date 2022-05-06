import { UsersTableComponent } from './users-table/users-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:UsersTableComponent },
  { path: 'user-edit', loadChildren: () => import('./user-edit/user-edit.module').then(m => m.UserEditModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
