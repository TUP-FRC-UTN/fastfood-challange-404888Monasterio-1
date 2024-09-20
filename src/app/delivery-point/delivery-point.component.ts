import { Component, inject } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {
  orderService = inject(OrderService);
  
  onDeliver(order: Order){
    this.orderService.removeOrder(order);
  }
}
