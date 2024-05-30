import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { OrderListDto } from '../../model/order-list.dto';
import { OrdersService } from '../../services/orders.service';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
  imports: [OrderDetailComponent],
})
export class OrdersComponent implements OnInit {

  @Input() ViewDetail!: boolean;
  @Output() selectedOrder: number | null = null;

  orders: OrderListDto[] = [];

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    //this.getOrders();
    this.orders = [
      {
        id: 1,
        client: 'John Doe',
        date: new Date(),
        items: 3,
        status: 'pendiente',
      },
      {
        id: 1,
        client: 'John Doe',
        date: new Date(),
        items: 3,
        status: 'pendiente',
      },
      {
        id: 1,
        client: 'John Doe',
        date: new Date(),
        items: 3,
        status: 'pendiente',
      },
    ];
  }

  getOrders() {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  showOrderDetails(orderId: number) {
    this.selectedOrder = orderId;
  }
  handleViewChange(view: boolean) {
    if (!view) {
      this.selectedOrder = null;
    }
  }

  markAsCompleted(arg0: any) {}

}
