export class LoginUserDto {
  email: string;
  password: string;
  userType: string;
  constructor(email: string, password: string, userType: string) {
    this.email = email;
    this.password = password;
    this.userType = userType;
  }
}
