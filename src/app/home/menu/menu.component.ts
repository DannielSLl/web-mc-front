import { Component } from '@angular/core';
import { CategoriasComponent } from './categorias/categorias.component';
import { VerProductosComponent } from './ver-productos/ver-productos.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
