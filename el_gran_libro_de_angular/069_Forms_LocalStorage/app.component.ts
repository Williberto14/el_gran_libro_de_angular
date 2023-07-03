import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '069 formsLocalStorage';
  form: FormGroup;
  constructor(private fctrl:FormBuilder ){
    this.form=fctrl.group({
      codigo:'',
      nombre:'',
      aficiones: fctrl.group({
        aficion1:'',
        aficion2:''
      })
    })
    this.leerDatos();
  }
  onSubmit() {
    console.log("codigo . " + this.form.controls['codigo'].value);
    console.log("nombre . " + this.form.controls['nombre'].value);
    console.log("aficiones " + JSON.stringify(this.form.controls['aficiones'].value));
    console.log("form " + JSON.stringify(this.form.value));
    this.grabarDatos();
  }
  grabarDatos(){
    localStorage.setItem("codigo",this.form.controls['codigo'].value);
    localStorage.setItem("nombre",this.form.controls['nombre'].value);
    localStorage.setItem("aficiones",JSON.stringify(this.form.controls['aficiones'].value));
  }
  leerDatos(){
      this.form.patchValue({
        'codigo': localStorage.getItem("codigo")?
                  localStorage.getItem("codigo"):""});
      this.form.patchValue({
        'nombre': localStorage.getItem("nombre")?
                  localStorage.getItem("nombre"):""});
      this.form.patchValue({
        'aficiones': JSON.parse(localStorage.getItem("aficiones"))?
                     JSON.parse(localStorage.getItem("aficiones")):""});
    }
}
