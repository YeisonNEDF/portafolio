import { NgModule, Component } from '@angular/core';
//Importamos el RouterModule y esto le dira a angular cuales son las rutas principales y hijas 
import { Routes, RouterModule } from "@angular/router"; 
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

//Las rutas es un arreglo, portafolio sera la pagina de inicio
const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent   },
    { path:'about', component: AboutComponent},
    { path:'item', component: ItemComponent},
    //Por default si no encuentra pagina redireccionará a protafolio. pathMatch:'full'= con esto ayuda a que lea todo el path y obligue a redirecionar 
    { path:'**', pathMatch:'full', redirectTo: 'home'}
];


//Decorador
@NgModule({
    //Aqui pondremos la configuracion que especificaremos para el AppRoutingModule -->RouterModule.forRoot(app_routes)
    imports: [
        /*forChild --> Con este especificamos la rutas hijas, forRoot Especificamos las rutas padre*/
        RouterModule.forRoot(app_routes, {useHash: true}) //Debemos usar useHash: true, para que no tome como carpeta y pasen por el index antes
    ],

    //De esta forma exportamos para que pueda funcionar <router-outlet></router-outlet> en la pagina app.component.html
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}


 