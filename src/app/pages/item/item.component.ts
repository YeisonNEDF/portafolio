import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

producto: ProductoDescripcion = {
  categoria: '',
  desc1: '',
  desc2: '',
  producto: '',
  resumen: '',
  subtitulo1: '',
  subtitulo2: ''
};

  id: any[] = [];

  //Con esta linea dentro del constructor leeremos la url
  constructor(private route: ActivatedRoute,
              public productosService: ProductosService) { }

  ngOnInit(): void {
    //Aqui llamaremos la instruccion y subscribe va a estar pendiente de todos los cambios que sucedan con los parametros del url
    this.route.params
        .subscribe( parametros =>{

          //['id'] con esto especificamos que solo nos muestre prod-# # = al numero id seleccionado
          console.log(parametros['id']);

          //Llamamos, importar, en el constructor el metodo que nos ayuda a obtener el id del url definido en productos.services.ts, pero para poderlo ejecutar llamamos el subscribe
          this.productosService.getProducto(parametros['id'])
              .subscribe((producto: any) => {
                this.id = parametros['id'];
                this.producto = producto;  
                //console.log(producto);
                

              });
        });

  }

}
