import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'component-a',
    loadChildren: () =>
      import('./features/module-a/module-a.module').then(m => m.ModuleAModule),
  },
  {
    path: 'component-b',
    loadChildren: () =>
      import('./features/module-b/module-b.module').then(m => m.ModuleBModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'component-a'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
