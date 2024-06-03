import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
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
export class OrderDetailComponent implements OnChanges {
  @Output() viewChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() id!: number;

  order: OrderDetailDto = {} as OrderDetailDto;

  constructor(public orderService: OrdersService) {}

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
        console.error(error.message);
      },
    });
  }

  Close() {
    this.viewChange.emit(false);
  }

  public getOrderDetail(id: number) {
    this.orderService.getOrderDetail(id).subscribe({
      next: (data) => {
        this.order = data;
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }
}
