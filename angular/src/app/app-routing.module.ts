import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminAddProjetComponent } from './admin-add-projet/admin-add-projet.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPrincipalComponent } from './admin-principal/admin-principal.component';
import { AdminShowComponent } from './admin-show/admin-show.component';

const routes: Routes = [
  {
    path: '',
    component:AcceuilComponent,
  },
  {
    path: 'admin/add',
    component:AdminAddProjetComponent,
  },
  {
    path: 'admin',
    component:AdminPrincipalComponent,
  },
  {
    path: 'admin/show',
    component:AdminShowComponent,
  },
  {
    path: 'admin/login',
    component:AdminLoginComponent,
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
