import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  private cookingOrder?: Order;
  constructor() { }

  addOrder(order: Order){
    this.orders.push(order);
  }
  removeOrder(order: Order){
    const index = this.orders.indexOf(order);
    this.orders.splice(index, 1);
  }
  cookOrder(order: Order){
    this.cookingOrder = order;
    this.removeOrder(order);
  }
  getCookingOrder(): Order | undefined {
    return this.cookingOrder;
  }
  finishCook(){
    if (this.cookingOrder == null)
      return;
    this.cookingOrder.ready = true;
    this.addOrder({...this.cookingOrder});
    this.cookingOrder = undefined;
  }
  getOrdersUnready(): Order[]{
    return this.orders.filter(o => !o.ready)
  }
  getOrdersReady(): Order[] {
    return this.orders.filter(o => o.ready);
  }
}
