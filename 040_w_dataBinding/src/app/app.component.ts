import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Libro: Libro = {
    titulo: "El Quijote",
    autor: "Cervantes",
    precio: 20,
    stock: 5,
    cantidad: 0,
    imagen: "../assets/old-books.jpg"
  };

  downCantidad(libro: Libro) {
    if (libro.cantidad > 0) libro.cantidad--;
  }

  upCantidad(libro: Libro) {
    if (libro.cantidad < libro.stock) libro.cantidad++;
  }

  getCoord(event: MouseEvent) {
    console.log(event.clientX + ", " + event.clientY);
  }
}

//Type Libro
interface Libro {
  titulo: string,
  autor: string,
  precio: number,
  stock: number,
  cantidad: number,
  imagen: string
}

