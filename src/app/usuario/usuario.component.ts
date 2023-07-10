import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit  {

  titulo:string="Lista de Catalogo";

  usuarios:Usuario[] | undefined;

  constructor(private usuarioService:UsuarioService){}
  
  ngOnInit(): void {
    this.usuarioService.getAll().subscribe(
      c =>this.usuarios=c 
    );
  }
  delete(usuario:Usuario):void{
    console.log("hola");
    if (usuario.id) {
      this.usuarioService.delete(usuario.id).subscribe(
        res=>{
          this.usuarioService.getAll().subscribe(
            response=>this.usuarios=response
          );  
        }
      );
    }
  }
}
