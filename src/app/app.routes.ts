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
        children: [
          //Menu / Categorias
          { 
            path: ':categoria',
            title: 'Menu', 
            loadComponent: () => import('./home/menu/categorias/categorias.component').then(c => c.CategoriasComponent)
          },
          { 
            path: ':categoria/:id',
            title: 'Menu', 
            loadComponent: () => import('./home/menu/pruducto-detalles/pruducto-detalles.component').then(c => c.PruductoDetallesComponent)
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
