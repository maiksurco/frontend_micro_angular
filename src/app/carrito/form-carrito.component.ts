import { Component } from '@angular/core';
import { Carrito } from './carrito';
import { CarritoService } from './carrito.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-carrito',
  templateUrl: './form-carrito.component.html',
  styleUrls: ['./form-carrito.component.css']
})
export class FormCarritoComponent {
  detalle:Carrito=new Carrito();
  titulo:string="Registro de Carrito ";

  constructor(private detalleService:CarritoService,private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.detalleService.get(id).subscribe(
            es=>this.detalle=es
          );
        }
      }
    )
  }
  create():void{
    console.log(this.detalle);
    this.detalleService.create(this.detalle).subscribe(
      res=>this.router.navigate(['/carrito'])
    );
  }

  update():void{
    this.detalleService.update(this.detalle).subscribe(
      res=>this.router.navigate(['/carrito'])
    );

  }
}
