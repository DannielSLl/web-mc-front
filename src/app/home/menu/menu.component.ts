import { Component } from '@angular/core';
import { CategoriasComponent } from './categorias/categorias.component';
import { ICategoria } from './categorias/categoria.interface';
import { CATEGORIAS } from './categorias/constants.categorias';
import { ProductosComponent } from './productos/productos.component';
import { IProducto } from './productos/productos.interface';
import { PRODUCTS } from './productos/constants.productos';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CategoriasComponent, ProductosComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  categorias: ICategoria[] = CATEGORIAS;

  productos: IProducto[] = PRODUCTS;
  
}
