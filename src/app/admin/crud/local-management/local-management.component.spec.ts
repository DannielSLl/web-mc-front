import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalManagementComponent } from './local-management.component';

describe('LocalManagementComponent', () => {
  let component: LocalManagementComponent;
  let fixture: ComponentFixture<LocalManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
