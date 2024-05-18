import { Component, Input, Output } from '@angular/core';
import { IProducto } from '../../interfaces/producto.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-productos',
  standalone: true,
  imports: [],
  templateUrl: './item-productos.component.html',
  styleUrl: './item-productos.component.css'
})
export class ItemProductosComponent {

  @Input()
  producto: IProducto = {

    id: 0,
    nombre: "",
    descripcion:  "",
    precio:0,
    calorias:0,
    categoria:{
      id:0,
      nombre:  "",
    },
    img: "",
  }
  constructor( private router : Router) {}

  onClickProduct(){
    this.router.navigateByUrl('/'+this.producto.id);
  }
}
