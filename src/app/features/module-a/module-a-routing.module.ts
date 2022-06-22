import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentAComponent} from "./component-a/component-a.component";

const routes: Routes = [
  {
    path: '',
    component: ComponentAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
