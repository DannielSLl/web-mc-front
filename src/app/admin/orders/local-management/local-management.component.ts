// local-management.component.ts

import { Component, OnInit } from '@angular/core';
import { Local } from './local.model'; // Importar el modelo Local
import { LocalService } from './local.service'; // Importar el servicio LocalService
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-local-management',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './local-management.component.html',
  styleUrls: ['./local-management.component.css']
})
export class LocalManagementComponent implements OnInit {
  locales: Local[] = [];
  localForm: Local = new Local(1, 'hdsuahdau', 'dsadasd', 'dasd');  // Inicialización con un nuevo objeto Local
  editingLocal: Local | null = null; // Local seleccionado para editar

  constructor(private localService: LocalService) { }

  ngOnInit(): void {
    this.loadLocales();
  }

  loadLocales(): void {
    this.localService.getLocales().subscribe(locales => {
      this.locales = locales;
    });
  }

  createLocal(): void {
    this.localService.createLocal(this.localForm).subscribe(() => {
      this.loadLocales();
      this.localForm = new Local(1, 'hdsuahdau', 'dsadasd', 'dasd'); // Limpiar formulario después de guardar
    });
  }

  editLocal(local: Local): void {
    this.editingLocal = local;
    // Copiar local para edición
    this.localForm = { ...local };
  }

  updateLocal(): void {
    if (this.editingLocal) {
      this.localService.updateLocal(this.localForm).subscribe(() => {
        this.loadLocales();
        this.cancelEdit();
      });
    }
  }

  deleteLocal(id: number): void {
    if (confirm('¿Estás seguro de querer eliminar este local?')) {
      this.localService.deleteLocal(id).subscribe(() => {
        this.loadLocales();
      });
    }
  }

  cancelEdit(): void {
    this.editingLocal = null;
    this.localForm = new Local(1, 'hdsuahdau', 'dsadasd', 'dasd'); // Limpiar formulario de edición
  }
}
