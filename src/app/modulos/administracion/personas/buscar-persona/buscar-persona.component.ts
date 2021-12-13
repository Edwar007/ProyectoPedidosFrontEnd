import { Component, OnInit } from '@angular/core';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {
    
  ListaPersonas: ModeloPersona[]=[];
  constructor(private servicioPersona : AdministracionService) { }

  ngOnInit(): void {
    this.ObtenerListaPersonas();
  }

  ObtenerListaPersonas(){
    this.servicioPersona.ConsultarPersona().subscribe((datos:ModeloPersona[])=>{
      this.ListaPersonas = datos;
    })
  }
}
