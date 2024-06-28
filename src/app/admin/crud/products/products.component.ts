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
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductoDto } from '../../../model/product.dto';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ProductService } from '../../../services/product.service';

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
    ButtonModule,
    ToolbarModule,
    ReactiveFormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {

  loading: boolean = false;

  products: ProductoDto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  productForm = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl(),
    calorias: new FormControl(),
    img: new FormControl(''),
    categoria: new FormControl(),
  });

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      calorias: ['', Validators.required],
      img: ['', Validators.required],
      categoria: ['', Validators.required],
    });

    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  getProduct(id: number) {
    this.productService.getProductById(id).subscribe((product) => {
      console.log(product);
      this.productForm.get('id')!.setValue(product!.id);
      this.productForm.get('nombre')!.setValue(product!.nombre);
      this.productForm.get('descripcion')!.setValue(product!.description);
      this.productForm.get('precio')!.setValue(product!.precio);
      this.productForm.get('calorias')!.setValue(product!.calorias);
      this.productForm.get('img')!.setValue(product!.img);
      this.productForm.get('categoria')!.setValue(product!.categoria.id);
    });
  }

  editProduct() {
    let productId = this.productForm.value.id;
    let product: ProductoDto = new ProductoDto(
      this.productForm.value.id,
      this.productForm.value.nombre!,
      this.productForm.value.descripcion!,
      this.productForm.value.precio,
      this.productForm.value.calorias,
      this.productForm.value.img!,
      this.productForm.value.categoria
    );
    console.log(product);
    this.productService.updateProduct(productId, product).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    })
  }
  // "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined
  deleteProduct(_t12: any) {
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
}
