import { Catalogo } from "../catalogo/catalogo";

export class Producto {
    id:number | undefined;
    nombre:string | undefined;
    stock:string | undefined;
    precio:number | undefined;
    catalogoId:Catalogo | undefined;
}
