import { ProductoDto } from '../../../model/product.dto';
import { Component, OnInit } from '@angular/core';
import { ItemProductosComponent } from './item-productos/item-productos.component';
import { ProductosService } from '../../../services/productos.service';
import { CategoriasComponent } from './categorias/categorias.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-productos',
  standalone: true,
  imports: [ItemProductosComponent,CategoriasComponent],
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

    this.productoService.FilterProductoByCategoria(categoriaId).subscribe((productosFiltrados) => {

      this.productosList = productosFiltrados;
    });
  }
}
