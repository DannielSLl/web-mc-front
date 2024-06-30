import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MatDialog} from '@angular/material/dialog'
import { DialogBodyLocalComponent } from './dialog-body-local/dialog-body-local.component';
import { LocalElegidoService } from '../services/local-elegido.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private matDialog: MatDialog,
    private localElegidoService: LocalElegidoService
  ) {}

  ngOnInit(): void {
    const currentLocal = this.localElegidoService.getLocalElegido();

    if (currentLocal === null) {
      this.openLocalDialog();
    }
  }

  openLocalDialog(): void {
    this.matDialog.open(DialogBodyLocalComponent, {
      height: '400px',
      width: '500px'
    });
  }
}

