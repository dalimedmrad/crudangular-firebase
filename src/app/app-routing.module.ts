import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AfficherComponent } from './users/afficher/afficher.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,    
  },
  {
    path: 'users',
    component: UsersComponent,    
  },
  {
    path: 'add-user',
    component: AddUserComponent,    
  },
  {
    path: 'edit-user/:id/:nom/:prenom/:email',
    component: EditUserComponent
  },
  {
    path: 'afficher-user/:id',
    component: AfficherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
