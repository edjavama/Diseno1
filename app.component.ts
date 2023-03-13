import { Component } from '@angular/core';
import { DatoGeneral } from './DatoGeneral.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DisenoUnoApp';
  titulo = 'LISTADO DATOS GENERALES';

  datosgenerales:DatoGeneral[]=[
    new DatoGeneral("ppp","ooo","www",555),
    new DatoGeneral("qqq","sss","ttt",111),
    new DatoGeneral("xxx","aaa","ddd",2222),
    new DatoGeneral("zzz","ddd","gggg",555)
  ];

  Entrada1:string="";
  Entrada2:string="";
  Entrada3:string="";
  Entrada4:number=0

  agregarElemento(){
    let elemento=new DatoGeneral(this.Entrada1, this.Entrada2, this.Entrada3, this.Entrada4);
    this.datosgenerales.push(elemento);
  }
}
