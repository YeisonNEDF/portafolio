import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  //Lis servicios se pueden llamar con un gion bajo y el nombre o el nombre + service (_infoPagina o infoPaginaService) y sera d tipo InfoPaginaService = le injectamos el service de info-pagina.service.ts
  //Con solo realizar la injecion de InfoPaginaService angular llama el constructor de info-pagina.service.ts
  constructor(public infoPaginaService: InfoPaginaService ){
    
  }
}
