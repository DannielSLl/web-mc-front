import { Component } from '@angular/core';
import { ProductoDto } from '../../../model/product.dto';
import { ProductosService } from '../../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { ItemProductosComponent } from './item-productos/item-productos.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ItemProductosComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {
  productosList: ProductoDto[] = [];

  constructor(
    private productoService: ProductosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const categoriaId = +params.get('categoria')!;

      if (categoriaId) {
        this.filtrarProductosPorCategoria(categoriaId);
      }
    });
  }

  filtrarProductosPorCategoria(categoriaId: number): void {
    this.productoService
      .getProductoByCategoria(categoriaId)
      .subscribe((productosFiltrados) => {
        this.productosList = productosFiltrados;
      });
  }
}
