import { Component } from '@angular/core';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  titulo:string="Lista de pedido";

  pedidos:Pedido[] | undefined;

  constructor(private pedidoService:PedidoService){}
  
  ngOnInit(): void {
    this.pedidoService.getAll().subscribe(
      c =>this.pedidos=c 
    );
  }
  delete(pedido:Pedido):void{
    console.log("hola");
    if (pedido.id) {
      this.pedidoService.delete(pedido.id).subscribe(
        res=>{
          this.pedidoService.getAll().subscribe(
            response=>this.pedidos=response
          );  
        }
      );
    }
  }

}
