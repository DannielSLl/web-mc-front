import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login(){
    //aca va el endpoint
    const token = 'sk8CSwGt4LR6kX81RfeVYF3Td8vJDDbsQU14pw4foqrUmMjP6vQde0EL8YT5A4sV';
    //localStorage.setItem("auth_token", token);
    localStorage.removeItem("auth_token");
    
  }
}
