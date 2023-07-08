import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{
  Producto:string="Lista de Producto";
  
  productos:Producto[] | undefined;
  

  constructor(private productoService:ProductoService){}

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      p =>this.productos= p
    );
}

}
