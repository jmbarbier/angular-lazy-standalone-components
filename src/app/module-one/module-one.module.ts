import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CompOneOneComponent } from './comp-one-one/comp-one-one.component';
import { CompOneTwoComponent } from './comp-one-two/comp-one-two.component';
import { ModuleOneRoutingModule } from "./module-one-routing.module";
import { RouteOneComponent } from './route-one/route-one.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModuleOneRoutingModule
  ],
  declarations: [CompOneOneComponent, CompOneTwoComponent, RouteOneComponent],
  entryComponents: [CompOneOneComponent, CompOneTwoComponent],
  providers: [
    {provide: 'components', useValue: [CompOneOneComponent, CompOneTwoComponent], multi: true}
  ]
})
export class ModuleOneModule { }
