import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url:string="http://root:s3cr3t@localhost:8083/producto";
  
  constructor(private http:HttpClient) { }

  //Obtener producto
  getAll():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  //crear producto
  create(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.url, producto);
  }

  //obtener por producto id
  get(id:number):Observable<Producto>{
    return this.http.get<Producto>(this.url+'/'+id);
  }

  //actualizar producto
  update(producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(this.url, producto);
  }
  

  //eliminar por id
  delete(id:number):Observable<Producto>{
    return this.http.delete<Producto>(this.url+'/'+id);
  }
}
