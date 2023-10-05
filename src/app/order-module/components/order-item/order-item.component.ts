import { Component, Input } from "@angular/core";
import { Order } from "../../models/order.model";
import { OrderService } from "../../services/order.service";

@Component({
    selector: '[order-item]',
    templateUrl: 'order-item.component.html',
    styleUrls: ['order-item.component.css']
})
export class OrderItemComponent {

    @Input()
    order!: Order

    constructor(private orderService: OrderService) {}

    // deleteProduct():void {
    //     this.productService.deleteProductById(this.product.id).subscribe({
    //         // quando finalizar, recarregar a página
    //         complete: () => {
    //             window.location.reload()
    //         },
    //     })
    // }

    cancelOrder():void {
        this.orderService.cancelOrder(this.order.id).subscribe({
            complete: () => {
                window.location.reload();
            }
        })
    }


    finishOrder():void {
        this.orderService.finishOrder(this.order.id).subscribe({
            complete: () => {
                window.location.reload();
            }
        })
    }
}