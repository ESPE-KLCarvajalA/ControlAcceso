import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContadorComponent } from './contador/contador.component';
import { LoginComponent } from './login/login.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  // { path: 'usuarios', component: UsuariosComponent }, 
  // {  path: 'contador', component: ContadorComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'rolelist', component: RolelistComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: '', redirectTo: '/contador', pathMatch: 'full' } 

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'rolelist', component: RolelistComponent },
  { path: 'dashboard', component: DashboardComponent }
];
