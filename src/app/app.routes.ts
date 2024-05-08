import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
  //Rutas privadas
  {path:'admin', component: AdminComponent},

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
