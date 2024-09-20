import { Component, inject } from '@angular/core';
import { OrderService } from '../services/order.service';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { PosComponent } from '../pos/pos.component';
import { DeliveryPointComponent } from "../delivery-point/delivery-point.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [KitchenComponent, PosComponent, DeliveryPointComponent, DatePipe],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  orderService = inject(OrderService);
}
