import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslocoRootModule} from "./transloco-root.module";
import {ModuleAModule} from "./features/module-a/module-a.module";
import {HttpClientModule} from "@angular/common/http";
import {ModuleBModule} from "./features/module-b/module-b.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    ModuleAModule,
    ModuleBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
