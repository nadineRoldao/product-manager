import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[] = []

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        
        this.productService.getProducts().subscribe((productResponse: Product[]) => {
            this.products = productResponse
            this.productService.emitTotalProductsChange(productResponse.length)
        })
    }

}