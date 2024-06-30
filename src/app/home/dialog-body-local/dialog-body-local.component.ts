import { Component, OnInit } from '@angular/core';
import { LocalesService } from '../../services/locales.service';
import { Local } from '../../model/local.dto';
import { MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalElegidoService } from '../../services/local-elegido.service';

@Component({
  selector: 'app-dialog-body-local',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, ReactiveFormsModule],
  templateUrl: './dialog-body-local.component.html',
  styleUrls: ['./dialog-body-local.component.css']
})
export class DialogBodyLocalComponent implements OnInit {

  locales: Local[] = [];
  localForm = this.fb.group({
    local: [null as number | null, [Validators.required]]
  });

  constructor(
    private localesService: LocalesService,
    public fb: FormBuilder,
    private ref: MatDialogRef<DialogBodyLocalComponent>,
    private localElegidoService: LocalElegidoService
  ) {}

  ngOnInit(): void {
    this.obtenerLocales();
    this.setInitialLocal();  // Establece el valor inicial desde LocalElegidoService
  }

  obtenerLocales(): void {
    this.localesService.getLocales().subscribe({
      next: (data) => {
        this.locales = data;
        console.log(this.locales);
      },
    });
  }

  setInitialLocal(): void {
    // Obtener el valor inicial del servicio y configurar el formulario
    const initialLocal = this.localElegidoService.getLocalElegido();
    if (initialLocal !== null) {
      this.localForm.get('local')?.setValue(initialLocal);
    }
  }

  localSeleccionado(): void {
    const id = this.localForm.get('local')?.value;
    if (id) {
      this.localElegidoService.setLocalElegido(id);
      this.ref.close();
      window.location.reload();
    }
  }
}
