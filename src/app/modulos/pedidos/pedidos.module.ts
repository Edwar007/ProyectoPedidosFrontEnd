import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { BuscarPedidosComponent } from './buscar-pedidos/buscar-pedidos.component';


@NgModule({
  declarations: [
    RealizarPedidoComponent,
    BuscarPedidosComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
