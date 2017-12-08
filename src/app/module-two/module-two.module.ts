import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompTwoOneComponent } from './comp-two-one/comp-two-one.component';
import { CompTwoTwoComponent } from './comp-two-two/comp-two-two.component';
import { ModuleTwoRoutingModule } from "./module-two-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ModuleTwoRoutingModule
  ],
  declarations: [CompTwoOneComponent, CompTwoTwoComponent],
  entryComponents: [CompTwoOneComponent, CompTwoTwoComponent],
  providers: [
    {provide: 'components', useValue: [CompTwoOneComponent, CompTwoTwoComponent], multi: true}
  ]
})
export class ModuleTwoModule { }
