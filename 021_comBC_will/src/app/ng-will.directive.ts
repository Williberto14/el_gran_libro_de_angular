import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appNgWill]'
})
export class NgWillDirective {

  constructor() {
    console.log("ngWill directive");
  }


  ngOnInit() {
    console.log("ngWill directive ngOnInit");
  }

  ngOnChanges() {
    console.log("ngWill directive ngOnChanges");
  }

}
