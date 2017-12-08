import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteOneComponent } from './route-one/route-one.component';

const moduleOneRoutes: Routes = [
  { path: 'routeone', component: RouteOneComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(moduleOneRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModuleOneRoutingModule { }
