import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductoDetallesComponent } from './pruducto-detalles.component';

describe('PruductoDetallesComponent', () => {
  let component: PruductoDetallesComponent;
  let fixture: ComponentFixture<PruductoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruductoDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruductoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
