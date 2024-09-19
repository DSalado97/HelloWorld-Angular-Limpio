import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  standalone: true,
  imports: [],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})

export class MiComponenteComponent {

  edad: number;
  nombres:Array<string>;

  constructor(){
    this.edad = 15;
    this.nombres = ["Victor", "Daniel", "Moy", "Aitor"];
  }


  ngOnInit(): void{
    console.log("Componente cargado")
  }

  aumentarEdad() {
    this.edad++;
  }
    
  disminuirEdad() {
    this.edad--;
  }

}
