import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  clientForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    contrasena: new FormControl(''),
    confirmaContrasena: new FormControl(''),
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl('')
  });


  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
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
      const passwordControl = this.clientForm.controls[contrasena];
      const conpasswordControl = this.clientForm.controls[confirmaContrasena];

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

    if(this.clientForm.valid){
      console.log('Llmar al servicio Register')
    }
    else{
      this.clientForm.markAllAsTouched();
    }
  }
}
