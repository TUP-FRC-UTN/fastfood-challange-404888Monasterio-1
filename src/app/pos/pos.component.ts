import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  orderService = inject(OrderService);
  onSubmit(form: NgForm) {
    const order: Order = {
      name: form.value.name,
      description: form.value.description,
      date: new Date(),
      number: Math.round(Math.random() * 999) + 1,
      ready: false
    }
    this.orderService.addOrder(order);
    form.reset();
  }
}
