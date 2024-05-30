import { AuthAdminService } from './../../services/auth/auth-admin.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginUserDto } from '../../model/login-user.dto';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  adminAuth: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authAdminService: AuthAdminService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminAuth = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    const dto = new LoginUserDto(
      this.adminAuth.get('email')?.value,
      this.adminAuth.get('password')?.value
    );
    this.router.navigate(['dashboard']);
    // this.authAdminService.login(dto).subscribe({
    //   next: (data) => {
    //     this.tokenService.setToken(data.token);
    //     this.tokenService.setLoggedIn(true);
    //     this.router.navigate(['']);
    //   },
    //   error: (error) => {
    //     alert(error.message);
    //     console.error(error);
    //   },
    // });
  }
}
