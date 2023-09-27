import { Component, OnInit } from "@angular/core";
import { Order } from "../../models/order.model";
import { OrderItemComponent } from "../order-item/order-item.component";

@Component({
    selector: 'orders-list',
    templateUrl: 'orders-list.component.html',
    styleUrls: ['orders-list.component.css']
})

export class OrdersListComponent implements OnInit{

    orders: Order [] = [{
        id: 36,
        clientId: 5,
        date: "17/08/2023",
        status: "CONFIRMED"
    }]
    
    ngOnInit(): void {

    }
}