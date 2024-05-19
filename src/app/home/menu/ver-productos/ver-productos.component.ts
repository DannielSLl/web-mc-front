import { ProductoDto } from './../../../model/product.dto';
import { Component, OnInit } from '@angular/core';
import { ItemProductosComponent } from '../ver-productos/item-productos/item-productos.component';
import { ProductosService } from '../../../services/productos.service';
import { IProducto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-ver-productos',
  standalone: true,
  imports: [ItemProductosComponent],
  templateUrl: './ver-productos.component.html',
  styleUrl: './ver-productos.component.css',
})
export class VerProductosComponent{
  productosList: ProductoDto[] = [];

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    this.productoService.getProductos();
    this.productoService.productos$.subscribe((productos) => {
      this.productosList = productos;
    });
  }
}
