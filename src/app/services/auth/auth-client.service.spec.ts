import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginUserDto } from '../../model/login-user.dto';
import { RegisterUserDto } from '../../model/register-user-dto';
import { JwtTokenDto } from '../../model/token.dto';
import { AuthClientService } from './auth-client.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AuthClientService', () => {
  let service: AuthClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AuthClientService]
    });
    service = TestBed.inject(AuthClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a POST request to login', () => {
    const loginDto: LoginUserDto = { email: 'testuser', password: 'testpassword' };
    const expectedToken: JwtTokenDto = { token: 'testtoken' };

    service.login(loginDto).subscribe((token: JwtTokenDto) => {
      expect(token).toEqual(expectedToken);
    });

    let httpMock: HttpTestingController;
    httpMock = TestBed.inject(HttpTestingController);


    const req = httpMock.expectOne(`${service.URL}/signin`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(loginDto);
    req.flush(expectedToken);
  });

  it('should send a POST request to register', () => {
    const registerDto: RegisterUserDto = {
      name: 'testuser',
      lastname: 'testpassword',
      email: 'test',
      phone: 123456789,
      password: 'testpassword'
    };

    let httpMock: HttpTestingController;
    httpMock = TestBed.inject(HttpTestingController);


    service.register(registerDto).subscribe((response: any) => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service.URL}/signup`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(registerDto);
    req.flush({});
  });
});
