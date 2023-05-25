import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule, Routes} from'@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { EditTareaComponent } from './edit-tarea/edit-tarea.component';
import { TareaService } from './shared/tarea.service';

const appRoutes: Routes= [
  { path:'tareas', component:TareaListaComponent},
  { path:'tareas/:id/edit', component:EditTareaComponent },
  { path:'tareas/new', component:EditTareaComponent },
  { path:'**', redirectTo:'/tareas', pathMatch:'full'} ];

@NgModule({
  declarations: [
    AppComponent,
    TareaListaComponent,
    EditTareaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
