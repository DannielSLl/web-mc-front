import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders.component').then(m => m.OrdersComponent),
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent),
  }
  ,
  {path: 'local',
    loadComponent: () => import('./orders/local-management/local-management.component').then(m => m.LocalManagementComponent)
  }
];
