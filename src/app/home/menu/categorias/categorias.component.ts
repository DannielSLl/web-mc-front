import { Component, Input } from '@angular/core';
import { ICategoria } from './categoria.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  @Input() categoria: ICategoria =
  
  {
    id: 0,
    nombre: "",
    img: "",
  }
  CambiarProductos(message:string){
    return console.log(message);
  }
}
