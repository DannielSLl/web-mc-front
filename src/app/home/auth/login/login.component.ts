import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginClientForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    contrasena: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.loginClientForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      contrasena: ['',Validators.required]
    })
  }

  login(){
    //aca va el endpoint
    //const token = 'sk8CSwGt4LR6kX81RfeVYF3Td8vJDDbsQU14pw4foqrUmMjP6vQde0EL8YT5A4sV';
    //localStorage.setItem("auth_token", token);
    //localStorage.removeItem("auth_token");
    
    if(this.loginClientForm.valid){
      console.log('LLmando al servicio login');
    }
    else{
      this.loginClientForm.markAllAsTouched();
    }
  }
}
