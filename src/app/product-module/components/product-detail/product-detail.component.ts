import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

    product!: Product

    constructor(private route: ActivatedRoute, private productService: ProductService) {}

    ngOnInit(): void {
        this.route.params.subscribe((routeParameters: any) => {
            this.productService.getProductById(routeParameters.id).subscribe((product: Product) => {
                this.product = product
            })
            
        })
    }

}