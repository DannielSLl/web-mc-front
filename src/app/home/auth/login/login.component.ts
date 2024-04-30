import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginUserDto } from '../../../model/login-user.dto';
import { LoginService } from '../../../services/auth/login/login.service';
import { TokenService } from '../../../services/token.service';
import { Router } from '@angular/router';

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
    private loginService: LoginService,
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

  //   else{
  //     this.loginClientForm.markAllAsTouched();
  //   }
  // }
  login(): void {
    const dto = new LoginUserDto(
      this.loginClientForm.get('email')?.value,
      this.loginClientForm.get('password')?.value
    );

    this.loginService.login(dto).subscribe({
      next: (data) => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['home']);
      },
    });
  }
}
