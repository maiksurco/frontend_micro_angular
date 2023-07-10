import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pedido } from './pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url:string="http://root:s3cr3t@localhost:8081/pedidos";
  
  constructor(private http:HttpClient) { }

  //Obtener pedido
  getAll():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.url);
  }

  //crear pedido
  create(pedido:Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.url, pedido);
  }

  //obtener por pedido id
  get(id:number):Observable<Pedido>{
    return this.http.get<Pedido>(this.url+'/'+id);
  }

  //actualizar pedido
  update(pedido:Pedido):Observable<Pedido>{
    return this.http.put<Pedido>(this.url, pedido);
  }
  

  //eliminar por id
  delete(id:number):Observable<Pedido>{
    return this.http.delete<Pedido>(this.url+'/'+id);
  }
}
