import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProductosComponent } from './item-productos.component';

describe('ItemProductosComponent', () => {
  let component: ItemProductosComponent;
  let fixture: ComponentFixture<ItemProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
