import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { Producto } from './producto';
import { Router,ActivatedRoute } from '@angular/router';
import { Catalogo } from '../catalogo/catalogo';
import { CatalogoService } from '../catalogo/catalogo.service';
@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})

export class FormProductoComponent implements OnInit{
  catalogos:Catalogo[] | undefined;;
  prod:Producto = new Producto();
  titulo:string="Resgistro de producto";

  constructor(private productoService:ProductoService, private router:Router, private activatedRoute:ActivatedRoute){ }

  ngOnInit(): void{
    this.cargar();
   }
  cargar():void{
    this.activatedRoute.params.subscribe(
      p=>{
        let id=p['id'];
        if(id){
          this.productoService.get(id).subscribe(
            es=>this.prod=es
          );
        }
      }
    );
  }

  create():void{
    console.log(this.prod);
    this.productoService.create(this.prod).subscribe(
      res=>this.router.navigate(['/producto'])
    );
  }

  update():void{
    this.productoService.update(this.prod).subscribe(
      res=>this.router.navigate(['/producto'])
    );
  }

}
