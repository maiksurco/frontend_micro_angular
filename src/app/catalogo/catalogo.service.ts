import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Catalogo } from './catalogo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private url:string="http://root:s3cr3t@localhost:8083/catalogo";
  
  constructor(private http:HttpClient ) { }

  //Obtener catalogo
  getAll():Observable<Catalogo[]>{
    return this.http.get<Catalogo[]>(this.url);
  }

  //crear catalogo
  create(catalogo:Catalogo):Observable<Catalogo>{
    return this.http.post<Catalogo>(this.url, catalogo);
  }

  //obtener por catalogo id
  get(id:number):Observable<Catalogo>{
    return this.http.get<Catalogo>(this.url+'/'+id);
  }

  //actualizar catalogo
  update(catalogo:Catalogo):Observable<Catalogo>{
    return this.http.put<Catalogo>(this.url, catalogo);
  }
  

  //eliminar por id
  delete(id:number):Observable<Catalogo>{
    return this.http.delete<Catalogo>(this.url+'/'+id);
  }
}
