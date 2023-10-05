import { Component, OnInit} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Order } from "../../models/order.model";
import { maxLengthCustomValidator } from "src/app/product-module/validators/max-length-custom.validator";
import { ActivatedRoute, Router } from "@angular/router";
import { OrderService } from "../../services/order.service";

@Component({
    selector: 'order-form',
    templateUrl: 'order-form.component.html',
    styleUrls: ['order-form.component.css']
})
export class OrderFormComponent {
    
    order: Order = {} as Order

    constructor(private orderService: OrderService, private router: Router ) {
    }

    saveOrder():void {
        this.orderService.createOrder(this.order).subscribe({
            complete: () => {
                console.log('pedido criado');

                this.router.navigate(['/orders'])               
            }
        }) 
    }
}