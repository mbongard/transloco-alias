import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";
import {ModuleARoutingModule} from "./module-a-routing.module";

const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/${lang}.json`)
  return acc;
}, {});

@NgModule({
  declarations: [
    ComponentAComponent,
  ],
  exports: [
    ComponentAComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    ModuleARoutingModule
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'moduleA',
        alias: 'm',
        loader
      },
      multi: true
    }
  ]
})
export class ModuleAModule { }
