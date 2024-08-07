import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { adminGuard } from './guard/admin.guard';

export const routes: Routes = [

  //Rutas privadas

  {
    path: 'login/admin',
    loadComponent: () => import('./admin/auth/auth.component').then(c => c.AuthComponent),
    data: {
      title: 'Login'
    }
  },
  { path:'dashboard',
    loadComponent: () => import('./admin/default.component').then(c => c.DefaultComponent),
    canActivate: [adminGuard],
    data: {
      title: 'Admin'
    },
   children: [
    {
      path: '',
      loadChildren: () => import('./admin/routes').then(m => m.routes),
    },
   ],

  },

  //Rutas publicas
  //Pagina Principal
  { path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),

    children: [
      //Inicio
      {
        path: '',
        title: 'Home',
        loadComponent: () => import('./home/inicio/inicio.component').then(c => c.InicioComponent)
      },
      //Menu
      {
        path: 'menu',
        loadComponent: () => import('./home/menu/menu.component').then(c => c.MenuComponent),
        children: [

          //Menu (categorias)
          {
            path: '',
            title: 'Menu',
            loadComponent: () => import('./home/menu/categorias/categorias.component').then(c => c.CategoriasComponent),
          },

          //Productos segun categoria
          {
            path: ':categoria',
            title: 'Menu',
            loadComponent: () => import('./home/menu/productos/productos.component').then(c => c.ProductosComponent),
          },
          //Productos seleccionado
          {
            path: ':categoria/:id',
            title: 'Detalles',
            loadComponent: () => import('./home/menu/producto-detalles/producto-detalles.component').then(c => c.PruductoDetallesComponent)
          }
        ]
      },
      //Login
      {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./home/login/login.component').then(c => c.LoginComponent)
      },
      //Register
      {
        path: 'register',
        title: 'Register',
        loadComponent: () => import('./home/register/register.component').then(c => c.RegisterComponent)
      },
      //Not Found
      {
        path: '**',
        title: 'Home',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];
