import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { maxLengthCustomValidator } from "../../validators/max-length-custom.validator";
import { ProductCategory } from "../../models/product-category.model";
import { Observable, of, switchMap } from "rxjs";

@Component({
    selector: 'product-form',
    templateUrl: 'product-form.component.html',
    styleUrls: ['product-form.component.css']
})
export class ProductFormComponent implements OnInit {

    productForm!: FormGroup
    isUpdate = false
    categories: ProductCategory[] = []
    selectedCategoryId!: number

    constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router ) {
        route.data.subscribe({
            next: (data: any) => {
                this.categories = data.categories
            } 
        })
    }

    ngOnInit(): void {
        this.isUpdate = false
        this.buildForm(null)

        this.route.queryParamMap
        .pipe(switchMap((queryParameters: any) => !!queryParameters.id ? this.productService.getProductById(queryParameters.id) : of()))
        .subscribe((product: Product) => {
            this.isUpdate = true
            this.buildForm(product)
        })

        // this.route.queryParams.subscribe((queryParameters: any) => {
        //     this.isUpdate = !!queryParameters.id
        //     if (!!this.isUpdate) {
        //         this.productService.getProductById(queryParameters.id).subscribe((product: Product) => {
        //             this.buildForm(product)
        //         })
        //     }
        // })
    }

    buildForm(product: Product | null): void {
        let id = null
        let name = null
        let category = null
        let price = null
        let link = null

        if (!!product) {
            id = product.id
            name = product.name
            category = this.categories.find((item) => {
                return item.id === product.category.id
            })
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

    get product(): Product {
        return {
            id: this.productForm.get('id')?.value,
            name: this.productForm.get('nameCtrl')?.value,
            category: this.productForm.get('categoryCtrl')?.value,
            price: this.productForm.get('priceCtrl')?.value,
            link: this.productForm.get('linkCtrl')?.value
        }
    }

    onCategoryChange(event: any):void {
        this.selectedCategoryId = event.target.value
    }

    saveProduct():void {
        if (this.productForm.valid && !this.isUpdate) {
            this.productService.createProduct(this.product).subscribe({
                complete: () => {
                    this.router.navigate(['/products'])               
                }
            }) 
        } else {
            this.productService.updateProduct(this.product).subscribe({
                complete: () => {
                    //redirecionando para /products
                    this.router.navigate(['/products'])
                }
            })
        }
    }

}