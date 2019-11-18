import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'test01', loadChildren: () => import('./pages/test01/test01.module').then(m => m.Test01Module) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
