import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';


@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  siteKey:string="";
  rolPersona:string="";
  fgValidador:FormGroup = this.fb.group({
    'nombres': ["",[Validators.required]],
    'apellidos': ["",[Validators.required]],
    'correo': ["",[Validators.required]],
    'celular': ["",[Validators.required]],
    'captcha': ["",[Validators.required]],
    
  })

  id:string="";

  constructor(private fb:FormBuilder, private route:ActivatedRoute, private servicioPersona:AdministracionService, private router:Router){
    this.siteKey = "6LcJtYcdAAAAAO9-73R7Uw3hEGQomH-o2m0hCk-S"
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarPersona(); 
  }

  BuscarPersona(){
      this.servicioPersona.ConsultarPersonaPorId(this.id).subscribe((datos:ModeloPersona)=>{
      this.fgValidador.controls['nombres'].setValue(datos.nombres);
      this.fgValidador.controls['apellidos'].setValue(datos.apellidos);
      this.fgValidador.controls['correo'].setValue(datos.correo);
      this.fgValidador.controls['celular'].setValue(datos.celular);
      if(datos.rol === "ADMINISTRADOR"){
        this.fgValidador.controls['administrador'].setValue(datos.rol);
      }
      if(datos.rol === "CLIENTE"){
        this.fgValidador.controls['cliente'].setValue(datos.rol);
      }
      if(datos.rol === "ASESOR"){
        this.fgValidador.controls['asesor'].setValue(datos.rol);
      }
    },(error:any)=>{
      alert("la persona no existe!!");
    })
  }

  EditarPersona(){
    let nombres = this.fgValidador.controls['nombres'].value;
    let apellidos = this.fgValidador.controls['apellidos'].value;
    let correo = this.fgValidador.controls['correo'].value;
    let celular = this.fgValidador.controls['celular'].value;
    let rol="";
    let p = new ModeloPersona();
    p.nombres=nombres;
    p.apellidos=apellidos;
    p.correo=correo;
    p.celular=celular;
    p.correo=correo;
    p.rol=this.rolPersona;
    p.id = this.id;



    this.servicioPersona.EditarPersona(p).subscribe((datos:ModeloPersona)=>{
      alert("La persona ha sido editado");
      this.router.navigate(["/administracion/buscar-persona"]);
    },(error:any)=>{
      alert("Error en la edicion de la persona");
    })
  }
  rol(rol:string){
    this.rolPersona = rol;
  }
}
