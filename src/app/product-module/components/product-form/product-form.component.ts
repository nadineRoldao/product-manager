import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";

@Component({
    selector: 'product-form',
    templateUrl: 'product-form.component.html',
    styleUrls: ['product-form.component.css']
})
export class ProductFormComponent implements OnInit {

    product: Product = {} as Product
    isUpdate = false

    constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router ) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe((queryParameters: any) => {
            this.isUpdate = !!queryParameters.id
            if (!!this.isUpdate) {
                this.productService.getProductById(queryParameters.id).subscribe((product: Product) => {
                    this.product = product         
                })
            }
        })
    }

    saveProduct():void {

        if (!this.isUpdate) {
            this.productService.createProduct(this.product).subscribe({
                complete: () => {
                    console.log('produto criado');
    
                    this.router.navigate(['/products'])               
                }
            }) 
        } else {
            
            this.productService.updateProduct(this.product).subscribe({
                complete: () => {
                    console.log('produto atualizado');
    
                    //redirecionando para /products
                    this.router.navigate(['/products'])
                }
            })
        } 
    }

}