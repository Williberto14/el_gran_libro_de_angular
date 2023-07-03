import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mod2Module } from './mod2.module';
import { Mod4Module } from './mod4/mod4.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Mod2Module,
    Mod4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
