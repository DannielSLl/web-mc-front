import { Routes } from '@angular/router';

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
      //Menus(Categorias)
      {
        path: 'menu',
        title: 'Menu',
        loadComponent: () => import('./home/menu/menu.component').then(c => c.MenuComponent),
      },
      //Menus
      {
        path: 'menu/:categoria',
        title: 'Menu',
        loadComponent: () => import('./home/menu/menu.component').then(c => c.MenuComponent),
      },
      //Registro
      {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./home/auth/login/login.component').then(c => c.LoginComponent)
      },
      //Login
      {
        path: 'register',
        title: 'Register',
        loadComponent: () => import('./home/auth/register/register.component').then(c => c.RegisterComponent)
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
