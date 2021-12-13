import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import *as cryptoJS from 'crypto-js'
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
siteKey:string="";

  fgValidador: FormGroup = this.fb.group({
    'usuario':['',[Validators.required, Validators.email]],
    'clave':['',[Validators.required]],
    'captcha':['',[Validators.required]]
  })
  constructor(private fb: FormBuilder, 
    private servicioSeguridad: SeguridadService,
    private router: Router) {
      this.siteKey = "6LcJtYcdAAAAAO9-73R7Uw3hEGQomH-o2m0hCk-S"
     }

  ngOnInit(): void {
  }
  IdentificarUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any)=>{
      //ok
      this.servicioSeguridad.AlmacenarDatos(datos)
      this.router.navigate(["/inicio"])
    },(error:any)=>{
      //ok
      alert("El usuario o la contraseña no existe!!")
    })
  }

  IrRegistrarse(){
    this.router.navigate(["/administracion/crear-persona"])
  }

  RecuperarClave(){
    this.router.navigate(["/seguridad/recuperar-clave"])
  }


}
