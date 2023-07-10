import { Component } from '@angular/core';
import { Carrito } from './carrito';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  titulo:string="lista de detalles";
  prueba:string="este es una prueba";

  detalles:Carrito[] | undefined;
  constructor(private detalleService:CarritoService){ }

  ngOnInit():void{
    this.detalleService.getAll().subscribe(
      e=>this.detalles=e
    )
  }

  delete(detalle: Carrito) {
    if (detalle.id) {
      this.detalleService.delete(detalle.id).subscribe(
        response => {
          
        },
        error => {
    
        }
      );
    }
  }
}
