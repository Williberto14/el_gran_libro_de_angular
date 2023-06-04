import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {

    //Descomente el ejemplo que desee probar
    
    //this.testOperadorCreate();
    //this.testOperadorInterval();
    //this.testOperadorOf();
    //this.testOperadorFrom1();
    //this.testOperadorFrom2();
    //this.testOperadorMap();
    this.testOperadorMerge();
    //this.testOperadorConcat();
    //this.testOperadorDo();
  }

  testOperadorCreate() {
    var source = Observable.create( observer => { observer.next(0); observer.next(1); observer.complete();});
    source.subscribe(x => console.log(x));
  }

  testOperadorInterval() {
    var source = Observable.interval(1000); //Emite secuencia 0, 1, 2, ... cada 1 segundo
    source.subscribe(x => console.log(x));
  }

  testOperadorOf() {
    var source = Observable.of('a','b','c'); //Emite secuencia ‘a’, ‘b’ y ‘c’
    source.subscribe(x => console.log(x));
  }

  testOperadorFrom1() {
    var source = Observable.from(
      new Promise<string>( (resolve, reject) => {
          setTimeout(() => { resolve("Valor resuelto por la Promise."); }, 2000);
      })
    );
    source.subscribe(x => console.log(x));
  }

  testOperadorFrom2() {
    var source = Observable.from([{nombre: 'Miguel', edad: 30}, {nombre: 'Juan', edad: 35}]);
    source.subscribe(x => console.log(x));
  }

  testOperadorMap() {
    var source = Observable.interval(1000).map(x => 2 * x); //Emite secuencia 0, 2, 4, ...
    source.subscribe(x => console.log(x));
  }

  testOperadorMerge() {
    var source1 = Observable.interval(1000);
    var source2 = Observable.interval(1000).map(x => 10 * x);
    var source3 = source1.merge(source2); //Emite secuencia 0, 0, 1, 10, 2, 20,...
    source3.subscribe(x => console.log(x));
  }

  testOperadorConcat() {
    var source1 = Observable.of('a','b','c');
    var source2 = Observable.of('d','e','f');
    var source3 = source1.concat(source2); //Emite secuencia a, b, c, d, e, f
    source3.subscribe(x => console.log(x));
  }

  testOperadorDo() {
    var source = Observable.of('a','b','c').do(x => console.log(x)); //Emite secuencia ‘a’, ‘b’ y ‘c’, y muestra estos valores por log
    source.subscribe(x => console.log(x));
  }

}
