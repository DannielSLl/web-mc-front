export class RegisterUserDto {
  name: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
  constructor(
    name: string,
    lastname: string,
    phone: number,
    email: string,
    password: string
  ) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}
