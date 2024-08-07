import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'orders',
    loadComponent: () =>
      import('./orders/orders.component').then((m) => m.OrdersComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./crud/products/products.component').then(
        (m) => m.ProductsComponent
      ),
  },
  {
    path: 'local',
    loadComponent: () =>
      import('./crud/local-management/local-management.component').then(
        (m) => m.LocalManagementComponent
      ),
  },
];
