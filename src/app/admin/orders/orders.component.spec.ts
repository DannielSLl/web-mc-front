import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersComponent } from './orders.component';
import { OrdersService } from '../../services/orders.service';
import { OrderListDto } from '../../model/order-list.dto';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let ordersService: OrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersComponent, HttpClientModule],
      providers: [OrdersService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    ordersService = TestBed.inject(OrdersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should fetch orders successfully', () => {
    const orders: OrderListDto[] = [
      {
        id: 1,
        client: 'John Doe',
        date: new Date(),
        items: 2,
        status: 'Pending',
      },
      {
        id: 2,
        client: 'law Moe',
        date: new Date(),
        items: 1,
        status: 'Delivered',
      }
    ];
    spyOn(ordersService, 'getAllOrders').and.returnValue(of(orders));

    component.getOrders();

    expect(component.orders).toEqual(orders);
  });

  it('should set selectedOrder when showOrderDetails is called', () => {
    const orderId = 1;

    component.showOrderDetails(orderId);

    expect(component.selectedOrder).toEqual(orderId);
  });

  it('should reset selectedOrder when handleViewChange is called with false', () => {
    component.selectedOrder = 1;

    component.handleViewChange(false);

    expect(component.selectedOrder).toBeNull();
  });
});
