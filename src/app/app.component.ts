import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PosComponent } from "./pos/pos.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { OrderService } from './services/order.service';
import { Order } from './models/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PosComponent, KitchenComponent, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastfood';
  orderService = inject(OrderService);
  onDeliver(order: Order){
    this.orderService.removeOrder(order);
  }
}
