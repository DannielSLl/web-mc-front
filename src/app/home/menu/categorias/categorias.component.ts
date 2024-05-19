import { ProductosService } from './../../../services/productos.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoriasService } from '../../../services/categorias.service';
import { CategoriaDto } from '../../../model/categoria.dto';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent implements OnInit{
  categorias: CategoriaDto[] = [
  ];

  constructor(
    private categoriasService: CategoriasService,
    private productosService: ProductosService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.categoriasService.getAllCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log(this.categorias);
      },
    });
  }

  BuscarCategoria(id: number) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.productosService.FilterProductoByCategoria(id);
  }
}
