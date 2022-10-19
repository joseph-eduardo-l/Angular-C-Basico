import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>
    <H3>La base es: <strong> 5 </strong></H3>


    <button (click)="acumular(base)">+ {{base}} </button>
    <span>{{numero}} </span>
    <button (click)="acumular(-base)">- {{base}} </button>
 
    `
})
export class ContadorComponent {
    public title:string = 'Contador App';
    numero :number= 10 ;
    base :number = 5;
  
    acumular (valor:number){  //metodo
       this.numero += valor ;
    } 
}