import { ProductoDto } from '../../../model/product.dto';
import { Component, OnInit } from '@angular/core';
import { ItemProductosComponent } from './productos-content/item-productos/item-productos.component';
import { ProductosService } from '../../../services/productos.service';
import { CategoriasComponent } from './categorias/categorias.component';
import { ActivatedRoute } from '@angular/router';
import { ProductosContentComponent } from './productos-content/productos-content.component';

@Component({
  selector: 'app-ver-productos',
  standalone: true,
  imports: [ProductosContentComponent,CategoriasComponent],
  templateUrl: './ver-productos.component.html',
  styleUrl: './ver-productos.component.css',
})
export class VerProductosComponent implements OnInit{
  
  productosList: ProductoDto[] = [];

  constructor(
    private productoService: ProductosService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  
  }

  filtrarProductosPorCategoria(categoriaId: number): void {

    this.productoService.getProductoByCategoria(categoriaId).subscribe((productosFiltrados) => {

      this.productosList = productosFiltrados;
    });
  }
}
