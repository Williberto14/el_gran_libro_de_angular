import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '066 formRValida';
  form: FormGroup;

  constructor(private fctrl: FormBuilder) {

    this.form = fctrl.group({
      codigo: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6)
      ])],
      nombre: ['', Validators.required],
      aficiones: fctrl.group({
        aficion1: ['MUSICA', Validators.required],
        aficion2: ['', Validators.required],
      })
    })

  }

  onSubmit() {
    console.log("codigo . " + this.form.controls['codigo'].value);
    console.log("nombre . " + this.form.controls['nombre'].value);
    console.log("aficiones " + JSON.stringify(this.form.controls['aficiones'].value));
    console.log(JSON.stringify(this.form.value));
  }
}
