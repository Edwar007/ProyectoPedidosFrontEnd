import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';


@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  siteKey:string="6LcJtYcdAAAAAO9-73R7Uw3hEGQomH-o2m0hCk-S";
  
  fgCreacion: FormGroup = this.fb.group({
    'nombres': ["",[Validators.required]],
    'apellidos': ["",[Validators.required]],
    'correo': ["",[Validators.required, Validators.email]],
    'celular': ["",[Validators.required]],
    'captcha':['',[Validators.required]]
  })
  constructor(private fb: FormBuilder, private servicioAdministracion:AdministracionService, private router: Router) { }

  ngOnInit(): void {
  }

  CrearUsuario(){
    let nombres = this.fgCreacion.controls['nombres'].value;
    let apellidos = this.fgCreacion.controls['apellidos'].value;
    let correo = this.fgCreacion.controls['correo'].value;
    let celular = this.fgCreacion.controls['celular'].value;

    let persona= new ModeloPersona();
    persona.nombres = nombres;
    persona.apellidos = apellidos;
    persona.correo = correo;
    persona.celular = celular;
    persona.rol = "CLIENTE";

    this.servicioAdministracion.CrearPersona(persona).subscribe((datos:ModeloPersona)=>{
      alert("Persona almacenada correctamente");
      this.router.navigate(["/administracion/buscar-persona"]);
    },(error:any)=>{
      alert("error en el almacenamiento de personas");
    })  
  }
}
