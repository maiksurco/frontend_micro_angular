import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Carrito } from './carrito';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private url="http://localhost:8086/carrito";

  constructor(private http:HttpClient){}
  //obtener un detalle
  getAll():Observable<Carrito[]>{
    return this.http.get<Carrito[]>(this.url);
  }
  //crear detalle
  create(detalle:Carrito):Observable<Carrito>{
    return this.http.post<Carrito>(this.url, detalle);
  }
  //obetner un detalle
  get(id:number):Observable<Carrito>{
    return this.http.get<Carrito>(this.url+'/'+id);
  }
  //actualizar detalle
  update(detalle:Carrito):Observable<Carrito>{
    return this.http.put<Carrito>(this.url, detalle);
  }
  //eliminar un detalle
  delete(id:number):Observable<Carrito>{
    return this.http.delete<Carrito>(this.url+'/'+id);
  }
}
