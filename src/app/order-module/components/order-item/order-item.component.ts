import { Component, Input } from "@angular/core";
import { Order } from "../../models/order.model";

@Component({
    selector: '[order-item]',
    templateUrl: 'order-item.component.html',
    styleUrls: ['order-item.component.css']
})
export class OrderItemComponent {

    @Input()
    order!: Order

}