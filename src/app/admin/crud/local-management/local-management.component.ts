// local-management.component.ts

import { Component, OnInit } from '@angular/core';
import { Local } from '../../../model/local.model'; // Importar el modelo Local
import { LocalService } from '../../../services/local.service'; // Importar el servicio LocalService
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';


@Component({
  selector: 'app-local-management',
  standalone: true,
  imports: [TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    ReactiveFormsModule,],
  templateUrl: './local-management.component.html',
  styleUrls: ['./local-management.component.css']
})
export class LocalManagementComponent implements OnInit {
getProduct(arg0: any) {
throw new Error('Method not implemented.');
}
  locales: Local[] = [];// Inicialización con un nuevo objeto Local
  editingLocal: Local | null = null; // Local seleccionado para editar

  localForm = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(),
    direccion: new FormControl(),
    ciudad: new FormControl()
  });
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
    let newLocal = new Local(this.localForm.value.id, this.localForm.value.nombre, this.localForm.value.direccion, this.localForm.value.ciudad);
    this.localService.createLocal(newLocal).subscribe(() => {
      this.loadLocales();
      this.clear()
    });
  }

  editLocal(local: Local): void {
    this.editingLocal = local;
    // Copiar local para edición
    this.localForm.setValue({
      id: local.id,
      nombre: local.nombre,
      direccion: local.direccion,
      ciudad: local.ciudad
    });
  }

  updateLocal(): void {
    if (this.editingLocal) {
      let updateLocal = new Local(this.localForm.value.id, this.localForm.value.nombre, this.localForm.value.direccion, this.localForm.value.ciudad);
      this.localService.updateLocal(updateLocal).subscribe(() => {
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
    this.clear() // Limpiar formulario de edición
  }

  protected clear() {
    this.localForm.reset({
      id: '',
      nombre: '',
      direccion: '',
      ciudad: ''
    });
  }
}
