import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormCatalogoComponent } from './catalogo/form-catalogo.component';
import { FormProductoComponent } from './producto/form-producto.component';
import { FormUsuarioComponent } from './usuario/form-usuario.component';
import { FormPedidoComponent } from './pedido/form-pedido.component';
import { FormCarritoComponent } from './carrito/form-carrito.component';

const routes:Routes=[
  {path:'',redirectTo:'/carrito',pathMatch:'full'},
  {path:'carrito',component:CarritoComponent},
  {path:'carrito/form',component:FormCarritoComponent},
  {path:'carrito/form/:id',component:FormCarritoComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    ProductoComponent,
    UsuarioComponent,
    PedidoComponent,
    CarritoComponent,

    FormCatalogoComponent,
    FormProductoComponent,
    FormUsuarioComponent,
    FormPedidoComponent,
    FormCarritoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
