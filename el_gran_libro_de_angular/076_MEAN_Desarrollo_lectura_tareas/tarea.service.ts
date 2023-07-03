import { Injectable } from '@angular/core';
import { TareaModel } from '../shared/tarea.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TareaService {

  constructor(private http: HttpClient) { }
  getAllTareas() {
    return this.http.get<TareaModel[]>('http://localhost:3000/api/tareas');
  }
}
