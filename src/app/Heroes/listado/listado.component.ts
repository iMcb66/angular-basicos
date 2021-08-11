import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  heroes: string[] = ['spiderman','Iron Man','Hulk','Thor','capitan america'];
  heroeBorrado: string = '';

  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() ||'';
  
  }
  

}
