import { Component, OnInit } from "@angular/core";
import { Order } from "../../models/order.model";
import { OrderService } from "../../services/order.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'order-detail',
    templateUrl: 'order-detail.component.html',
    styleUrls: ['order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

    order!: Order

    constructor(private route: ActivatedRoute, private orderService: OrderService){}

    ngOnInit(): void {
        
        this.route.params.subscribe((routeParameters: any) => {

            this.orderService.getOrderById(routeParameters.id).subscribe((order: Order) => {
                this.order = order
            })

        })

    }

}