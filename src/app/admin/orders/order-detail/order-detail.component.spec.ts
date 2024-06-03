import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailComponent } from './order-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SimpleChanges } from '@angular/core';
import { of } from 'rxjs';

describe('AsdComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDetailComponent, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getOrderDetail on ngOnChanges', () => {
    const id = 123;
    component.id = id;
    const changes: SimpleChanges = {
      id: {
        currentValue: id,
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
    };
    spyOn(component, 'getOrderDetail');
    component.ngOnChanges(changes);
    expect(component.getOrderDetail).toHaveBeenCalledWith(id);
  });

  it('should mark order as completed', () => {
    spyOn(component.orderService, 'markAsCompleted').and.returnValue(of({}));
    spyOn(window, 'alert');
    spyOn(component, 'Close');

    component.markAsCompleted();

    expect(component.orderService.markAsCompleted).toHaveBeenCalledWith(
      component.order.id
    );
    expect(window.alert).toHaveBeenCalledWith('Orden marcada como completada');
    expect(component.Close).toHaveBeenCalled();

    // Add more test cases as needed
  });

  it('should emit viewChange event with false', () => {
    spyOn(component.viewChange, 'emit');
    component.Close();
    expect(component.viewChange.emit).toHaveBeenCalledWith(false);
  });

  it('should get order detail', () => {
    const id = 123;
    const mockOrder = {
      id: 123,
      nameClient: 'John',
      lastnameClient: 'Doe',
      phone: '123456789',
      dateOrder: '2021-10-10',
      orderDeliveryDate: '2021-10-11',
      products: [],
      total: 100,
      status: 'Pending',
    };

    spyOn(component.orderService, 'getOrderDetail').and.returnValue(of(mockOrder));

    component.getOrderDetail(id);

    expect(component.orderService.getOrderDetail).toHaveBeenCalledWith(id);
    expect(component.order).toEqual(mockOrder);
  });
});
