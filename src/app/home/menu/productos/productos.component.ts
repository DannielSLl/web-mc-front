import { Component } from '@angular/core';
import { ProductoDto } from '../../../model/product.dto';
import { ProductService } from '../../../services/product.service';
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
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const categoriaId = +params.get('categoria')!;
      if (categoriaId) {
        this.getProductByCategoria(categoriaId);
      }
    });
  }

  getProductByCategoria(categoriaId: number): void {
    this.productService
      .getProductByCategoria(categoriaId)
      .subscribe((products) => {
        console.log(products);
        this.productosList = products;
      });
  }
}
