import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductoInterface} from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  
  cargando = true;
  
  

  //Con esta linea nos damos cuenta que cada uno de los items que se encuentran dentro de producto es de  ProductoInterface
  productos: ProductoInterface[] = [];
  prductoss : ProductoDescripcion[] = [];
  prductosFiltrados : ProductoDescripcion[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
   }


   private cargarProductos(){

    this.http.get('https://angular-html-c6df5-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any) => {      

        //Con esta linea garantizamos que nos pinte los onjetos JSON en la vista
        this.productos = resp;

        //Con esta linea pusimos que la pagina se demorara dos segundos antes de cargar para confirmar el loadign svg que creamos
        //setTimeout(() => {},2000);
        this.cargando = false;
      });

   }

   //(``) con esas bigulillas no permite escribir codigo dentro de un string ejemplo ${id} de javascript id el cual recibimos en el metodo
   //Crearemos un metodo para pintar la informacion de los productos 
   getProducto(id: string){
    return this.http.get(`https://angular-html-c6df5-default-rtdb.firebaseio.com/productos/${id}.json`);
   }

   
   buscarProducto(termino: string){
     this.prductosFiltrados =  this.prductosFiltrados.filter(producto => {
       return true;

     });
     console.log(this.prductosFiltrados);
   }
}
