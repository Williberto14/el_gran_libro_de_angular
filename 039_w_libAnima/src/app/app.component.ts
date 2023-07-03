import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('estado', [
      state('inactivo', style({
        backgroundColor: '#FFFF00',
        transform: 'scale(1)',
        color: 'blue'
      })),
      state('activo', style({
        backgroundColor: '#013ADF',
        transform: 'scale(2.0)',
        color: 'white'
      })),
      transition('inactivo => activo', animate('500ms ease-in')),
      transition('activo => inactivo', animate('500ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = '039 libAnima William';
  estado: string = 'inactivo';
  cambioEstado() {
    this.estado = (this.estado == "activo") ? 'inactivo' : 'activo';
  }
}
