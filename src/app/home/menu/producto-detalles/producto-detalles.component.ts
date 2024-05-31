import { Component, Input, OnInit } from '@angular/core';
import { ProductoDto } from '../../../model/product.dto';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-pruducto-detalles',
  standalone: true,
  imports: [],
  templateUrl: './producto-detalles.component.html',
  styleUrl: './producto-detalles.component.css'
})
export class PruductoDetallesComponent implements OnInit{

  
  @Input()
  producto: ProductoDto = {

    id: 0,
    nombre: "",
    descripcion:  "",
    precio:0,
    calorias:0,
    img: "",
    categoria:0
  }
  
  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      const productId = +params.get('id')!; 

      if (productId) {
        this.obtenerProductoPorId(productId);
      }
    });
  }

  obtenerProductoPorId(productId: number): void {
    this.productosService.getProductoById(productId).subscribe((producto) => {

      if (producto) {
        
        this.producto = producto;
      } else {
        console.log(producto);
      }
    });
  }
}
