import { ProductoDto } from '../../../model/product.dto';
import { Component, OnInit } from '@angular/core';
import { ItemProductosComponent } from './item-productos/item-productos.component';
import { ProductosService } from '../../../services/productos.service';
import { CategoriasComponent } from './categorias/categorias.component';

@Component({
  selector: 'app-ver-productos',
  standalone: true,
  imports: [ItemProductosComponent,CategoriasComponent],
  templateUrl: './ver-productos.component.html',
  styleUrl: './ver-productos.component.css',
})
export class VerProductosComponent implements OnInit{
  productosList: ProductoDto[] = [];

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void{
    this.productoService.getProductos().subscribe((productos) => {
      this.productosList = productos;
    });
  }

  filtrarProductosPorCategoria(categoriaId: number): void {
    this.productoService.FilterProductoByCategoria(categoriaId).subscribe((productosFiltrados) => {
      this.productosList = productosFiltrados;
    });
  }
}
