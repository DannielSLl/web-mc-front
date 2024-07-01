import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
import { Modal } from 'bootstrap';
import { ProductoDto } from '../../../model/product.dto';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ProductService } from '../../../services/product.service';
import { CreateProductDto } from '../../../model/create-product.dto';

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
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  loading: boolean = false;
  products: ProductoDto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private renderer: Renderer2
  ) {}

  productForm = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl(),
    calorias: new FormControl(),
    local: new FormControl(),
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
      local: [''],
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
      this.productForm.patchValue({
        id: product.id,
        nombre: product.nombre,
        descripcion: product.description,
        precio: product.precio,
        calorias: product.calorias,
        img: product.img,
        categoria: product.categoria.id,
      });
    });
  }

  saveProduct() {
    let product: CreateProductDto = new CreateProductDto(
      this.productForm.value.nombre!,
      this.productForm.value.descripcion!,
      +this.productForm.value.precio,
      +this.productForm.value.calorias,
      +this.productForm.value.local,
      +this.productForm.value.categoria,
      this.productForm.value.img!
    );
    this.productService.createProduct(product).subscribe({
      next: (data) => {
        this.productService.getProducts().subscribe((products) => {
          this.products = products;
        });
        alert(data.message);
      },
      error: (error) => {
        console.error('There was an error!', error);
        console.log(this.productForm.valid);
        console.log(this.productForm.value);
        console.log(product);
      },
    });
  }

  editProduct() {
    let productId = this.productForm.value.id;
    let product: ProductoDto = new ProductoDto(
      this.productForm.value.id!,
      this.productForm.value.nombre!,
      this.productForm.value.descripcion!,
      +this.productForm.value.precio,
      +this.productForm.value.calorias,
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
      },
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: (data) => {
        this.productService.getProducts().subscribe((products) => {
          this.products = products;
        });
        alert(data.message);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
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

  protected clear() {
    this.productForm.reset({
      id: '',
      nombre: '',
      descripcion: '',
      precio: '',
      calorias: '',
      local: '',
      img: '',
      categoria: '',
    });
  }
}
