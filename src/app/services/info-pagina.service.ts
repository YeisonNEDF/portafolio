
import { Injectable } from '@angular/core';
 //Con el servicio http: HttpClient podemos hacer peticiones a cualquier servidor rest o esternos ...
 import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

info: InfoPagina = {};
cargada = false;

  //Injectaremos el servicio para poder utilizar aqui el HttpClient de app.modules.ts
  constructor(private http: HttpClient) { 
 
    console.log('Info Pagina Cargada');

//Cearemos esto para que me permita leer el archivo JSon y tomar sus propiedades para que pueda ser utilizado en las paginas, en donde realizaremos peticiones HTTP y lo impirtamos en aap.module.ts HttpClientModule
//Leeremos el archivo JSON que esta alojado en la carpeta data --> subscribe es el que nos permite ejecutar y imprimimos lo que venga alli en console.log
this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) =>{

      this.cargada = true;
      this.info = resp;
      console.log(resp);


      //.subscribe((resp: any) =>{ --Consultar como es con el any
      //Podemos Imprimir personalizados registros del archivo JSON
      //console.log(resp.twitter);
    });
   
  }
}




