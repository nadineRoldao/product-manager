import { Component, OnInit } from "@angular/core";
import { Order } from "../../models/order.model";
import { OrderItemComponent } from "../order-item/order-item.component";
import { OrderService } from "../../services/order.service";

@Component({
    selector: 'orders-list',
    templateUrl: 'orders-list.component.html',
    styleUrls: ['orders-list.component.css']
})

export class OrdersListComponent implements OnInit{

    orders: Order [] = []
    
    constructor(private orderService: OrderService){

    }
    
    ngOnInit(): void {
        this.orderService.getOrders().subscribe((orderResponse: Order[]) => {
            this.orders = orderResponse
            this.orderService.emitTotalOrdersChange(orderResponse.length)
        })
    }
}