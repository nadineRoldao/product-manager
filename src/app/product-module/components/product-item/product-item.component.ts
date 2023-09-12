import { Component, Input } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";

@Component({
    selector: '[product-item]',
    templateUrl: 'product-item.component.html',
    styleUrls: ['product-item.component.css']
})
export class ProductItemComponent {

    @Input()
    product!: Product

    constructor(private productService: ProductService) {
    }

    deleteProduct():void {
        this.productService.deleteProductById(this.product.id).subscribe({
            complete: () => {
                window.location.reload()
            },
        })
    }
}