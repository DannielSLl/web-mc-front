import { Component, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoDto } from '../../../../model/product.dto';

@Component({
  selector: 'app-item-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-productos.component.html',
  styleUrl: './item-productos.component.css'
})
export class ItemProductosComponent {

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

  constructor() {}

}
