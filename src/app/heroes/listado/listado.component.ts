import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

   heroes : string[]= ['spiderman','hulk','thor','maikol','mamawebaso'];
   heroeBorrado:string = '';

   BorrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';

    
  }
  
}

 