import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterUserDto } from '../../../model/register-user-dto';
import { AuthClientService } from '../../../services/auth/auth-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerClientForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    contrasena: new FormControl(''),
    confirmaContrasena: new FormControl(''),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authClientService: AuthClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerClientForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        contrasena: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^!@#$%^&*-_=+'"?,<.>:;`~]*[!@#$%^&*-_=+'"?,<.>:;`~])(?=[^A-Z]*[A-Z]).{0,10000}$/
            ),
          ],
        ],
        confirmaContrasena: ['', Validators.required],
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        telefono: ['', Validators.required],
      },
      {
        validators: this.mustMatch('contrasena', 'confirmaContrasena'),
      }
    );
  }

  mustMatch(contrasena: any, confirmaContrasena: any) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[contrasena];
      const conpasswordControl = formGroup.controls[confirmaContrasena];

      if (
        conpasswordControl.errors &&
        !conpasswordControl.errors['MustMatch']
      ) {
        return;
      }

      if (passwordControl.value !== conpasswordControl.value) {
        conpasswordControl.setErrors({ MustMatch: true });
      } else {
        conpasswordControl.setErrors(null);
      }
    };
  }

  register(): void {
    const dto = new RegisterUserDto(
      this.registerClientForm.get('nombre')?.value,
      this.registerClientForm.get('apellidos')?.value,
      this.registerClientForm.get('email')?.value,
      this.registerClientForm.get('telefono')?.value,
      this.registerClientForm.get('password')?.value
    );

    this.authClientService.register(dto).subscribe({
      next: (data) => {
        this.router.navigate(['login']);
      },
      error: (error) => {
        alert('Error al registrar');
      }
    });
  }
}
