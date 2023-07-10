import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string="http://root:s3cr3t@localhost:8082/usuario";
  
  constructor(private http:HttpClient) { }

  //Obtener usuario
  getAll():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
  }

  //crear usuario
  create(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario);
  }

  //obtener por usuario id
  get(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(this.url+'/'+id);
  }

  //actualizar usuario
  update(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(this.url, usuario);
  }
  

  //eliminar por id
  delete(id:number):Observable<Usuario>{
    return this.http.delete<Usuario>(this.url+'/'+id);
  }
}
