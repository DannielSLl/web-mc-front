import { Component } from '@angular/core';
import { ProductoDto } from '../../../model/product.dto';
import { ProductosService } from '../../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { ItemProductosComponent } from './item-productos/item-productos.component';
import { LocalElegidoService } from '../../../services/local-elegido.service';
import { LocalProducto } from '../../../model/local-productos.dto';

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
    private route: ActivatedRoute,
    private localElegidoService: LocalElegidoService
  ) {}

  ngOnInit(): void {
    
    console.log(this.localElegidoService.getLocalElegido())
    const idLocal = this.localElegidoService.getLocalElegido();

      
    if(idLocal){
      this.filtrarProductosPorLocal(idLocal);
      console.log(this.productosList);
    }

  }

  filtrarProductosPorCategoria(categoriaId: number): void {
    this.productoService
      .getProductoByCategoria(categoriaId)
      .subscribe((productosFiltrados) => {
        this.productosList = productosFiltrados;
      });
  }

  filtrarProductosPorLocal(LocalId: number): void {
    this.productoService.getProductoByLocal(LocalId).subscribe({
      next: (data: LocalProducto[]) => {
        this.productosList = data.map(item => item.producto);
      }
    });
  }
}
