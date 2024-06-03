import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthAdminService } from './../../services/auth/auth-admin.service';
import { TokenService } from '../../services/token.service';
import { AuthComponent } from './auth.component';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,AuthComponent,ReactiveFormsModule],
      providers: [AuthAdminService, TokenService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.adminAuth.get('email')?.value).toEqual('');
    expect(component.adminAuth.get('password')?.value).toEqual('');
  });

  it('should set token and navigate to home on successful login', () => {
    const mockToken = 'mock-token';
    spyOn(component.authAdminService, 'login').and.returnValue(
      of({ token: mockToken })
    );
    spyOn(component.tokenService, 'setToken');
    spyOn(component.tokenService, 'setLoggedIn');
    spyOn(component.router, 'navigate');

    component.login();

    expect(component.tokenService.setToken).toHaveBeenCalledWith(mockToken);
    expect(component.tokenService.setLoggedIn).toHaveBeenCalledWith(true);
    expect(component.router.navigate).toHaveBeenCalledWith(['']);
  });

  it('should display error message and log error on login error', () => {
    const mockError = { message: 'mock-error' };
    spyOn(component.authAdminService, 'login').and.returnValue(
      throwError(() => new Error(mockError.message))
    );
    spyOn(window, 'alert');
    spyOn(console, 'error');

    component.login();

    expect(window.alert).toHaveBeenCalledWith(mockError.message);
    expect(console.error).toHaveBeenCalledWith(mockError.message);
  });
});
