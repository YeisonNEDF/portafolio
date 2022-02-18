import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

//Creamos esta propiedad anio para que en la fecha del footer tome el año del sistema y lo establecemos en el footer entre llaves{anio} y asi sea de forma dinamica
  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
