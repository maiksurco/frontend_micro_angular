import { Component, OnInit } from '@angular/core';
import { CatalogoService } from './catalogo.service';
import { Catalogo } from './catalogo';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-catalogo',
  templateUrl: './form-catalogo.component.html',
  styleUrls: ['./form-catalogo.component.css']
})
export class FormCatalogoComponent implements OnInit {

  cata:Catalogo = new Catalogo();
  titulo:string="Resgistro de Catalogo";

  constructor(private catalogoService:CatalogoService, private router:Router, private activatedRoute:ActivatedRoute){ }

  ngOnInit(): void{
    this.cargar();
   }
  cargar():void{
    this.activatedRoute.params.subscribe(
      a=>{
        let id=a['id'];
        if(id){
          this.catalogoService.get(id).subscribe(
            es=>this.cata=es
          );
        }
      }
    );
  }
  
  create():void{
        console.log(this.cata);
        this.catalogoService.create(this.cata).subscribe(
          res=>this.router.navigate(['/catalogo'])
        );
  }

  update():void{
    this.catalogoService.update(this.cata).subscribe(
      res=>this.router.navigate(['/catalogo'])
    );
  }
 
}
