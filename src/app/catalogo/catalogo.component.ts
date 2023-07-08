import { Component, OnInit } from '@angular/core';
import { Catalogo } from './catalogo';
import { CatalogoService } from './catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  titulo:string="Lista de Catalogo";

  catalogos:Catalogo[] | undefined;

  constructor(private catalogoService:CatalogoService){}
  
  ngOnInit(): void {
      this.catalogoService.getAll().subscribe(
        c =>this.catalogos=c 
      );
  }
}
