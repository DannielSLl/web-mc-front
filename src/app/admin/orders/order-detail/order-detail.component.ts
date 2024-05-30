import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { OrderDetailDto } from '../../../model/order-detail.dto';
import { OrdersService } from '../../../services/orders.service';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.css',
})
export class OrderDetailComponent implements OnChanges, OnInit {
  @Output() viewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() id!: number;

  order!: OrderDetailDto;

  constructor(private orderService: OrdersService) {}
  ngOnInit(): void {
    this.order = {
      id: 1,
      nameClient: 'John Doe',
      lastnameClient: 'Doe',
      phone: '123456789',
      dateOrder: '2021-09-01T00:00:00.000Z',
      orderDeliveryDate: '2021-09-02T00:00:00.000Z',

      status: 'pendiente',
      total: 100,
      products: [
        {
          name: 'Item 1',
          quantity: 1,
          price: 10,
          totalPartial: 10,
        },
        {
          name: 'Item 2',
          quantity: 2,
          price: 20,
          totalPartial: 40,
        },
        {
          name: 'Item 3',
          quantity: 3,
          price: 30,
          totalPartial: 90,
        },
      ],
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getOrderDetail(changes['id'].currentValue);
  }

  markAsCompleted() {
    this.orderService.markAsCompleted(this.order.id).subscribe({
      next: (data) => {
        alert('Orden marcada como completada');
        this.Close();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  Close() {
    this.viewChange.emit(false);
  }


  private getOrderDetail(id: number) {
    this.orderService.getOrderDetail(id).subscribe({
      next: (data) => {
        this.order = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
