import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  @Input() categorias: CategoriaDto[] = [];

  constructor( private categoriasService: CategoriasService) {}

  ngOnInit(): void {
    this.categoriasService.getAllCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log(this.categorias);
      },
    });
    
  }
}

