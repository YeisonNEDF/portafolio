import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductoInterface} from '../interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  
  cargando = true;

  //Con esta linea nos damos cuenta que cada uno de los items que se encuentran dentro de producto es de  ProductoInterface
  productos: ProductoInterface[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
   }


   private cargarProductos(){

    this.http.get('https://angular-html-c6df5-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any) => {
        console.log(resp);

        //Con esta linea garantizamos que nos pinte los onjetos JSON en la vista
        this.productos = resp;

        
        //Con esta linea pusimos que la pagina se demorara dos segundos antes de cargar para confirmar el loadign svg que creamos
        //setTimeout(() => {},2000);
        this.cargando = false;

      });

   }
}
