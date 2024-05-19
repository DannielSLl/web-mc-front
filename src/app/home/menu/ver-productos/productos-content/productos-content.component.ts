import { Component, OnInit } from '@angular/core';
import { ItemProductosComponent } from './item-productos/item-productos.component';
import { ProductoDto } from '../../../../model/product.dto';
import { ProductosService } from '../../../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-content',
  standalone: true,
  imports: [ItemProductosComponent],
  templateUrl: './productos-content.component.html',
  styleUrl: './productos-content.component.css'
})
export class ProductosContentComponent implements OnInit{

  productosList: ProductoDto[] = [];

  constructor( private productoService: ProductosService,
    private route : ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      const categoriaId = +params.get('categoria')!; 

      if (categoriaId) {

        this.filtrarProductosPorCategoria(categoriaId);

      } else {

        this.getProductos();
        
      }
    });
  }

  getProductos(): void{

    this.productoService.getProductos().subscribe((productos) => {

      this.productosList = productos;
    });
  }

  filtrarProductosPorCategoria(categoriaId: number): void {

    this.productoService.getProductoByCategoria(categoriaId).subscribe((productosFiltrados) => {

      this.productosList = productosFiltrados;
    });
  }

}
