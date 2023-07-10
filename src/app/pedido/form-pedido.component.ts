import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})
export class FormPedidoComponent implements OnInit{

  ped:Pedido = new Pedido();
  titulo:string="Resgistro de pedido";

  constructor(private pedidoService:PedidoService, private router:Router, private activatedRoute:ActivatedRoute){ }

  ngOnInit(): void{
    this.cargar();
   }
  cargar():void{
    this.activatedRoute.params.subscribe(
      a=>{
        let id=a['id'];
        if(id){
          this.pedidoService.get(id).subscribe(
            es=>this.ped=es
          );
        }
      }
    );
  }

  create():void{
    console.log(this.ped);
    this.pedidoService.create(this.ped).subscribe(
      res=>this.router.navigate(['/pedido'])
    );
  }

  update():void{
    this.pedidoService.update(this.ped).subscribe(
      res=>this.router.navigate(['/pedido'])
    );
  }
}
