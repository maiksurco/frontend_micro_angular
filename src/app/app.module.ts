import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  {path:'', redirectTo:'/catalogo', pathMatch:'full'},
  {path:'catalogo', component:CatalogoComponent}, 
  {path:'catalogo/form', component:FormCatalogoComponent},
  {path:'catalogo/form/:id', component:FormCatalogoComponent},

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
    FormCarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
