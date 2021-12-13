import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  siteKey:string="6LcJtYcdAAAAAO9-73R7Uw3hEGQomH-o2m0hCk-S";
  
  fgValidador:FormGroup= this.fb.group({
    'nombre': ["",[Validators.required]],
    'precio': ["",[Validators.required]],
    'imagen': ["",[Validators.required]]
  })
  constructor(private fb:FormBuilder, private servicioProducto: ProductoService,private router: Router) { }

  ngOnInit(): void {
  }

  GuardarProducto(){
    let nombre = this.fgValidador.controls['nombre'].value;
    let precio = parseInt(this.fgValidador.controls['precio'].value);
    let imagen = this.fgValidador.controls['imagen'].value;

    let p= new ModeloProducto();
    p.nombre=nombre;
    p.precio=precio;
    p.imagen=imagen;

    this.servicioProducto.CrearProducto(p).subscribe((datos:ModeloProducto)=>{
      alert("Producto almacenado");
      this.router.navigate(["/administracion/buscar-producto"]);
    },(error:any)=>{
      alert("error en el almacenamiento de productos");
    }
    )


  }

}
