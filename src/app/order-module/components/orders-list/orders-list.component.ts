import { Component } from "@angular/core";
import { Order } from "../../models/order.model";

@Component({
    selector: 'orders-list',
    templateUrl: 'orders-list.component.html',
    styleUrls: ['orders-list.component.css']
})

export class OrdersListComponent {

    order: Order = 
        {
            id: 1,
            clientId: 1,
            date: 'ontem',
            status: "CONFIRMED"
        }
    
}