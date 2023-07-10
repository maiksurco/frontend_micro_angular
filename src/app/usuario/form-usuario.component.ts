import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  usu:Usuario = new Usuario();
  titulo:string="Resgistro de usuario";

  constructor(private usuarioService:UsuarioService, private router:Router, private activatedRoute:ActivatedRoute){ }

  ngOnInit(): void{
    this.cargar();
   }
  cargar():void{
    this.activatedRoute.params.subscribe(
      a=>{
        let id=a['id'];
        if(id){
          this.usuarioService.get(id).subscribe(
            es=>this.usu=es
          );
        }
      }
    );
  }

  create():void{
    console.log(this.usu);
    this.usuarioService.create(this.usu).subscribe(
      res=>this.router.navigate(['/usuario'])
    );
  }

  update():void{
    this.usuarioService.update(this.usu).subscribe(
      res=>this.router.navigate(['/usuario'])
    );
  }
}
