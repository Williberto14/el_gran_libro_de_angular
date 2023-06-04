import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Compo1Component } from './compo1/compo1.component';
import { FormsModule } from '@angular/forms';
import { NgWillDirective } from './ng-will.directive';

@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,
    NgWillDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
