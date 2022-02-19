import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//Injectamos InfoPaginaService para llamar los objectos JSON
  constructor(public  _servicio: InfoPaginaService) { }

  ngOnInit() {
  }

}
