import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBComponent } from './component-b/component-b.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";
import {ModuleBRoutingModule} from "./module-b-routing.module";

const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/${lang}.json`)
  return acc;
}, {});

@NgModule({
  declarations: [
    ComponentBComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    ModuleBRoutingModule
  ],
  exports: [
    ComponentBComponent
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'moduleB',
        alias: 'module',
        loader
      },
    }
  ]
})
export class ModuleBModule { }
