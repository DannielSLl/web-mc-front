import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ProductoDto } from '../../../model/product.dto';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit{

  loading: boolean = false;

  products: ProductoDto[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      descripcion: 'Descripción del producto 1',
      precio: 100,
      calorias: 200,
      img: 'https://via.placeholder.com/150',
      categoria: 1,
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del producto 2',
      precio: 200,
      calorias: 300,
      img: 'https://via.placeholder.com/150',
      categoria: 2,
    },
    {
      id: 3,
      nombre: 'Producto 3',
      descripcion: 'Descripción del producto 3',
      precio: 300,
      calorias: 400,
      img: 'https://via.placeholder.com/150',
      categoria: 3,
    },
    {
      id: 4,
      nombre: 'Producto 4',
      descripcion: 'Descripción del producto 4',
      precio: 400,
      calorias: 500,
      img: 'https://via.placeholder.com/150',
      categoria: 4,
    },
    {
      id: 5,
      nombre: 'Producto 5',
      descripcion: 'Descripción del producto 5',
      precio: 500,
      calorias: 600,
      img: 'https://via.placeholder.com/150',
      categoria: 5,
    },
    {
      id: 6,
      nombre: 'Producto 6',
      descripcion: 'Descripción del producto 6',
      precio: 600,
      calorias: 700,
      img: 'https://via.placeholder.com/150',
      categoria: 6,
    },
    {
      id: 7,
      nombre: 'Producto 7',
      descripcion: 'Descripción del producto 7',
      precio: 700,
      calorias: 800,
      img: 'https://via.placeholder.com/150',
      categoria: 7,
    },
    {
      id: 8,
      nombre: 'Producto 8',
      descripcion: 'Descripción del producto 8',
      precio: 800,
      calorias: 900,
      img: 'https://via.placeholder.com/150',
      categoria: 8,
    },
    {
      id: 9,
      nombre: 'Producto 9',
      descripcion: 'Descripción del producto 9',
      precio: 900,
      calorias: 1000,
      img: 'https://via.placeholder.com/150',
      categoria: 9,
    },
    {
      id: 10,
      nombre: 'Producto 10',
      descripcion: 'Descripción del producto 10',
      precio: 1000,
      calorias: 1100,
      img: 'https://via.placeholder.com/150',
      categoria: 10,
    },
    {
      id: 11,
      nombre: 'Producto 11',
      descripcion: 'Descripción del producto 11',
      precio: 1100,
      calorias: 1200,
      img: 'https://via.placeholder.com/150',
      categoria: 11,
    },
    {
      id: 12,
      nombre: 'Producto 12',
      descripcion: 'Descripción del producto 12',
      precio: 1200,
      calorias: 1300,
      img: 'https://via.placeholder.com/150',
      categoria: 12,
    },
    {
      id: 13,
      nombre: 'Producto 13',
      descripcion: 'Descripción del producto 13',
      precio: 1300,
      calorias: 1400,
      img: 'https://via.placeholder.com/150',
      categoria: 13,
    },
    {
      id: 14,
      nombre: 'Producto 14',
      descripcion: 'Descripción del producto 14',
      precio: 1400,
      calorias: 1500,
      img: 'https://via.placeholder.com/150',
      categoria: 14,
    },
    {
      id: 15,
      nombre: 'Producto 15',
      descripcion: 'Descripción del producto 15',
      precio: 1500,
      calorias: 1600,
      img: 'https://via.placeholder.com/150',
      categoria: 15,
    },
    {
      id: 16,
      nombre: 'Producto 16',
      descripcion: 'Descripción del producto 16',
      precio: 1600,
      calorias: 1700,
      img: 'https://via.placeholder.com/150',
      categoria: 16,
    },
    {
      id: 17,
      nombre: 'Producto 17',
      descripcion: 'Descripción del producto 17',
      precio: 1700,
      calorias: 1800,
      img: 'https://via.placeholder.com/150',
      categoria: 17,
    },
    {
      id: 18,
      nombre: 'Producto 18',
      descripcion: 'Descripción del producto 18',
      precio: 1800,
      calorias: 1900,
      img: 'https://via.placeholder.com/150',
      categoria: 18,
    },

  ];

  formProduct = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl(''),
    calorias: new FormControl(''),
    img: new FormControl(''),
    categoria: new FormControl(''),
  })

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  getSeverity(status: string) {
    switch (status) {
      case 'unqualified':
        return 'danger';
      case 'qualified':
        return 'success';
      case 'new':
        return 'info';
      case 'negotiation':
        return 'warning';
      case 'renewal':
        return undefined;
      default:
        return undefined; // Este es el caso base
    }
  }
  // "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined
  deleteProduct(_t12: any) {
    throw new Error('Method not implemented.');
  }
  editProduct(_t12: any) {
    throw new Error('Method not implemented.');
  }
  createProduct() {
    throw new Error('Method not implemented.');
  }
}
