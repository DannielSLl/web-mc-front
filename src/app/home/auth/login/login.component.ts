import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginUserDto } from '../../../model/login-user.dto';
import { TokenService } from '../../../services/token.service';
import { Router } from '@angular/router';
import { AuthClientService } from '../../../services/auth/auth-client.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginClientForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authClientService: AuthClientService,
    private tokenService: TokenService,
    // private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginClientForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    const dto = new LoginUserDto(
      this.loginClientForm.get('email')?.value,
      this.loginClientForm.get('password')?.value
    );

    this.authClientService.login(dto).subscribe({
      next: (data) => {
        this.tokenService.setToken(data.token);
        this.tokenService.setLoggedIn(true);
        this.router.navigate(['']);
      },
      error: (error) => {
        alert(error.error.message);
        console.error(error);
      }
    });
  }
}
