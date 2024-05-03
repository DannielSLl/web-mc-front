import { Component, OnInit } from '@angular/core';
import { ItemProductosComponent } from '../item-productos/item-productos.component';
import { ProductosService } from '../../../services/productos.service';
import { IProducto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-ver-productos',
  standalone: true,
  imports: [ItemProductosComponent],
  templateUrl: './ver-productos.component.html',
  styleUrl: './ver-productos.component.css'
})
export class VerProductosComponent implements OnInit{

  productosList : IProducto[] = [];

  constructor(private productoService: ProductosService){}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.getProductos().subscribe({
      next: (result) => {
        this.productosList = result;
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
