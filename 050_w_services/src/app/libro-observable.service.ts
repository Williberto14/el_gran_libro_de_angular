import { Injectable } from '@angular/core';
import { Libro } from './libro.model';
import { LIBROS } from './mocks';
import { Observable } from 'rxjs';

@Injectable()
export class LibroObservableService {

  libros: Libro[] = [];

  constructor() { }

  getLibros(): Observable<Libro[]> {

    return new Observable<Libro[]>(observer => {

      let auxListlibros: Libro[] = [];

      observer.next([]);

      LIBROS.forEach((eachLibro, index) => {

        setTimeout(() => {
          +

            auxListlibros.push(eachLibro);
          observer.next(auxListlibros);

        }, (index + 1) * 1500);

      });

      setTimeout(() => {

        observer.complete();

      }, (LIBROS.length + 1) * 1500);

    });

  }

}
