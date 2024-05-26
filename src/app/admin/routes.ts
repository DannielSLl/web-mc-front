import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'orders',
    loadComponent: () => import('./orders/orders.component').then(m => m.OrdersComponent),
  }
];
