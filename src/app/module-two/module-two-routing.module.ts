import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const moduleTwoRoutes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild(moduleTwoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModuleTwoRoutingModule {
}
