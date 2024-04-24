import { Component, Input} from '@angular/core';
import { IProducto } from './productos.interface';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  @Input() producto: IProducto = {
    
    id: 0,
    nombre: "",
    descripcion: "",
    precio: 0,
    calorias: 0,
    categoria: 
    {
        id:0,
        nombre: "",
    },
    
    img: "",
  }
}
