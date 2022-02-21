import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//Injectamos InfoPaginaService para llamar los objectos JSON
  constructor(public  _servicio: InfoPaginaService,
    //Con esta linea realizaremos la navegacion interna entre los componente, no olvidar importar(import)
              private router: Router) { }

  ngOnInit() {
  }

  //Implementaremos el metodo buscar inicializado en el buscador del header.component.ts al final
  buscarProducto(termino : string){

    //Validamos de que si solo presoine enter no busque nada, si envia vacia la busqueda = solo presiona enter
    if(termino.length < 1){
      return;
    }

    //Navegacion priero el segmento y segundo termino de busquedad(lo que recibe en la caja de texto buscar)
    this.router.navigate(['/search', termino]);
    
  }

}
