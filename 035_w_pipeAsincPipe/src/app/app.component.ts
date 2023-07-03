import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // promiseData: string = "";
  // observableData: string = "";
  // observableSubs: Subscription;

  promiseObj: Promise<string>;
  observableObj: Observable<string>;

  constructor() {
    this.promiseObj = this.getPromise();
    this.observableObj = this.getObservable();
  }

  getPromise() {
    return new Promise<string>(function (resolve, reject) {
      setTimeout(() => { resolve("Timer1 finalizado"); }, 2000);
    });
  }

  getObservable() {
    return new Observable<string>(observer => {
      setTimeout(() => { observer.next("Timer2 finalizado"); }, 4000);
    });
  }


  // ngOnDestroy() {
  //   if (this.observableSubs) this.observableSubs.
  //     unsubscribe();
  // }
}

