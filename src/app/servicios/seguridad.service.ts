import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  datosUsuarioEnSesion = new BehaviorSubject <ModeloIdentificar>(new ModeloIdentificar());
  constructor(private http:HttpClient) {
    this.VerificarSesionActual();
  }

  RefrescarDatosSesion(datos:ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

  ObtenerDatosusuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  Identificar(usuario:string, clave:string):Observable<ModeloIdentificar>{
    return this.http.post("http://localhost:3000/identificarpersona",{
      usuario:usuario,
      clave:clave
    },{
      headers: new HttpHeaders({
        
      })
    })
  }

  VerificarSesionActual(){
    let datos= this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }
  
  AlmacenarDatos(datos:ModeloIdentificar){
    datos.estadoIdentificado = true;
    let datosString = JSON.stringify(datos);
    localStorage.setItem("datosSesion",datosString);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString= localStorage.getItem("datosSesion");
    if(datosString){
      let datos= JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }

  EliminarSesion(){
    this.RefrescarDatosSesion(new ModeloIdentificar());
    localStorage.removeItem("datosSesion");
  }

  ObtenerToken(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos.tk;
    }else{
      return "";
    }
  }
}
