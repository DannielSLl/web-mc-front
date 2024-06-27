import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders.component').then(m => m.OrdersComponent),
  },
  {
    path: 'products',
    loadComponent: () => import('./crud/products/products.component').then(m => m.ProductsComponent),
  }
];
