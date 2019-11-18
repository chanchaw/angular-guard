import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test01Component } from './test01.component';
import { Test01Guard } from './test01.guard';


const routes: Routes = [
  { path:'',component:Test01Component,canActivate:[Test01Guard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Test01RoutingModule { }
