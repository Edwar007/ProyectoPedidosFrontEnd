import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPersona } from '../modelos/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(private http: HttpClient) { }

  //metodo para comunicarse con backhend

  CrearPersona(persona:ModeloPersona):Observable<ModeloPersona>{
    return this.http.post("http://localhost:3000/personas",persona,{

      headers: new HttpHeaders({
        'Authorization':`Bearer`
      })
    })
  }

  ConsultarPersona():Observable<ModeloPersona[]>{
    return this.http.get<ModeloPersona[]>("http://localhost:3000/personas");
  }
  
  EditarPersona(persona:ModeloPersona):Observable<ModeloPersona>{
    return this.http.put(`http://localhost:3000/personas/${persona.id}`,persona,{
      headers: new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    })
  }

  EliminarPersona(id:string):Observable<ModeloPersona>{
    return this.http.delete(`http://localhost:3000/personas/${id}`,{
      headers: new HttpHeaders({
        //'Authorization':`Bearer ${this.token}`
      })
    })
  }

  ConsultarPersonaPorId(id:string):Observable<ModeloPersona>{ 
    return this.http.get<ModeloPersona>(`http://localhost:3000/personas/${id}`);
  }

}
 