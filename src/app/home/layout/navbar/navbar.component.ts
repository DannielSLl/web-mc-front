import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../../services/token.service';
import { ShoppingCartComponent } from '../../menu/shopping-cart/shopping-cart.component';

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

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.tokenService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
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
