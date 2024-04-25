import { Component, Input } from '@angular/core';
import { ICategoria } from './categoria.interface';
import { RouterLink } from '@angular/router';
import { CATEGORIAS } from './constants.categorias';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  categorias:ICategoria[] = CATEGORIAS

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
