import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../../services/token.service';
import { ShoppingCartComponent } from '../../menu/shopping-cart/shopping-cart.component';
import { Local } from '../../../model/local.dto';
import { LocalesService } from '../../../services/locales.service';
import { LocalElegidoService } from '../../../services/local-elegido.service';
import { DialogBodyLocalComponent } from '../../dialog-body-local/dialog-body-local.component';
import { MatDialog} from '@angular/material/dialog'


@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [RouterLink, ShoppingCartComponent]
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  viewCart: boolean = false;
  local: Local = {id:0, nombre:'', ciudad:'',direccion:''}

  constructor(private tokenService: TokenService,
    private localService : LocalesService,
    private matDialog: MatDialog,
    private localElegidoService: LocalElegidoService
  ) {}

  ngOnInit(): void {
    this.tokenService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });


    const id = this.localElegidoService.getLocalElegido()
    
    if (id) {

      this.localService.getLocalById(id).subscribe(
        (local) => {this.local = local}
      )
    }
  }

  EligeLocal(): void {
    const dialogRef = this.matDialog.open(DialogBodyLocalComponent, {
      height: '400px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(selectedLocal => {
      if (selectedLocal) {
        // Actualizar sessionStorage con el local seleccionado
        sessionStorage.setItem('localElegido', JSON.stringify(selectedLocal));
        
        // Actualizar el servicio LocalElegidoService
        this.localElegidoService.setLocalElegido(selectedLocal);

      }
    });
  }

  logOut() {
    this.tokenService.logOut();
    this.tokenService.setLoggedIn(false);
  }

  handleViewChange() {
    this.viewCart = !this.viewCart;
    }
}
