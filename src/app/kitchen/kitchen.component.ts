import { Component, inject } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  orderService = inject(OrderService);
  onCookClicked(order: Order){
    this.orderService.cookOrder(order);
  }
  onFinishCook(){
    this.orderService.finishCook();
  }
}
