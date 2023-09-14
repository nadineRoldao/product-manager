import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { maxLengthCustomValidator } from "../../validators/max-length-custom.validator";

@Component({
    selector: 'product-form',
    templateUrl: 'product-form.component.html',
    styleUrls: ['product-form.component.css']
})
export class ProductFormComponent implements OnInit {

    productForm!: FormGroup
    product: Product = {} as Product
    isUpdate = false

    constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router ) {}

    ngOnInit(): void {

        this.buildForm(null)

        this.route.queryParams.subscribe((queryParameters: any) => {
            this.isUpdate = !!queryParameters.id
            if (!!this.isUpdate) {
                this.productService.getProductById(queryParameters.id).subscribe((product: Product) => {
                    this.buildForm(product)
                })
            }
        })
    }

    buildForm(product: Product | null): void {
        let id = 0
        let name = ''
        let category = ''
        let price = null
        let link = ''

        if (!!product) {
            id = product.id
            name = product.name
            category = product.category
            price = product.price
            link = product.link
        }

        this.productForm = new FormGroup({
            id: new FormControl(id),
            nameCtrl: new FormControl(name, [Validators.required, Validators.minLength(3), maxLengthCustomValidator(10)]),
            categoryCtrl: new FormControl(category, [Validators.required]),
            priceCtrl: new FormControl(price, [Validators.required]),
            linkCtrl: new FormControl(link)
        })

    }

    get name() {
        return this.productForm.get('nameCtrl')
    }

    get category() {
        return this.productForm.get('categoryCtrl')
    }

    get price() {
        return this.productForm.get('priceCtrl')
    }

    get productV2(): Product {
        return {
            id: this.productForm.get('id')?.value,
            name: this.productForm.get('nameCtrl')?.value,
            category: this.productForm.get('categoryCtrl')?.value,
            price: this.productForm.get('priceCtrl')?.value,
            link: this.productForm.get('linkCtrl')?.value
        }
    }

    saveProduct():void {

        if (this.productForm.valid && !this.isUpdate) {
            this.productService.createProduct(this.productV2).subscribe({
                complete: () => {
                    console.log('produto criado');
    
                    this.router.navigate(['/products'])               
                }
            }) 
        } else {
            this.productService.updateProduct(this.productV2).subscribe({
                complete: () => {
                    console.log('produto atualizado');
    
                    //redirecionando para /products
                    this.router.navigate(['/products'])
                }
            })
        }
    }

}