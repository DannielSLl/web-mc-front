import { Component } from '@angular/core';
import { CategoriasComponent } from './categorias/categorias.component';
import { VerProductosComponent } from './ver-productos/ver-productos.component';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CategoriasComponent, VerProductosComponent, CategoriasComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
