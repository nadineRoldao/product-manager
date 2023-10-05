import { Component } from "@angular/core";
import { OrderService } from "./services/order.service";

@Component({
    selector: 'order-container',
    templateUrl: 'order-container.component.html',
    styleUrls: ['order-container.component.css']
})

export class OrderContainerComponent {
    
        totalOrders = 0

        constructor(orderService: OrderService) {

            orderService.totalOrdersObservable.subscribe({
                next: (total: number) => {
                    this.totalOrders = total
                } 
            })
        }

}