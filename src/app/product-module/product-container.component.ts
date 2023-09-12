import { Component } from "@angular/core";
import { ProductService } from "./services/product.service";

@Component({
    selector: 'product-container',
    templateUrl: 'product-container.component.html',
    styleUrls: ['product-container.component.css']
})
export class ProductContainerComponent {

    totalProducts = 0

    constructor(productService: ProductService) {
        productService.totalProductsObservable.subscribe({
            next: (total: number) => {
                this.totalProducts = total
            } 
        })
    }
}