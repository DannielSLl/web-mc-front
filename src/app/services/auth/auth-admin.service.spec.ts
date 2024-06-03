import { TestBed } from '@angular/core/testing';
import { AuthAdminService } from './auth-admin.service';
import { LoginUserDto } from '../../model/login-user.dto';
import { JwtTokenDto } from '../../model/token.dto';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


describe('AuthAdminService', () => {
  let service: AuthAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(AuthAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should login and return a JWT token', () => {
    const dummyToken: JwtTokenDto = { token: '12345' };
    const loginDto: LoginUserDto = { email: 'admin', password: 'password' };

    let httpMock: HttpTestingController;
    httpMock = TestBed.inject(HttpTestingController);

    service.login(loginDto).subscribe(token => {
      expect(token).toEqual(dummyToken);
    });

    const req = httpMock.expectOne(`${service.URL}/signin`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(loginDto);
    req.flush(dummyToken);
  });
});
