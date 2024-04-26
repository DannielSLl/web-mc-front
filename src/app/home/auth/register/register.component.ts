import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../../services/auth/register/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  registerClientForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    contrasena: new FormControl(''),
    confirmaContrasena: new FormControl(''),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder, private regiserService: RegisterService){}

  ngOnInit(): void {
    this.registerClientForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      contrasena: ['',
        [
          Validators.required,
          Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^!@#$%^&*-_=+'"?,<.>:;`~]*[!@#$%^&*-_=+'"?,<.>:;`~])(?=[^A-Z]*[A-Z]).{0,10000}$/)
        ]
      ],
      confirmaContrasena: ['',Validators.required],
      nombre: ['',Validators.required],
      apellidos: ['',Validators.required],
      telefono: ['',Validators.required],
      direccion: ['',Validators.required],
    },
    {
      validators: this.mustMatch('contrasena','confirmaContrasena')
    });
  }

  mustMatch(contrasena: any, confirmaContrasena: any){

    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[contrasena];
      const conpasswordControl = formGroup.controls[confirmaContrasena];

      if(conpasswordControl.errors && !conpasswordControl.errors['MustMatch']){
        return;
      }

      if(passwordControl.value !== conpasswordControl.value){
        conpasswordControl.setErrors({MustMatch:true});
      }
      else{
        conpasswordControl.setErrors(null);
      }
    }
  }

  register(): void {

    if(this.registerClientForm.valid){
      this.regiserService.register(this.registerClientForm);
    }
    else{
      this.registerClientForm.markAllAsTouched();
    }
  }
}
