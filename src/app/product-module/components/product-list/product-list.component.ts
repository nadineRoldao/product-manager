import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

// essa classe implementa métodos da interface OnInit
export class ProductListComponent implements OnInit {

    // lista de produtos
    products: Product[] = []

    // exemplo usando pipe async do angular no html 
    // productObs: Observable<Product[]> = this.productService.getProducts()
    
    // construtor que recebe a productService
    constructor(private productService: ProductService) {
    }

    // implementando o metodo ngOnInit que executa os métodos que estão sendo chamados dentro dele quando a página iniciar
    ngOnInit(): void {
            // chamamos o método getProducts() que vem da productService e dando subscribe que recebe a lista de produtos
            this.productService.getProducts().subscribe((productResponse: Product[]) => {
           
            // agora products que vem da classe é igual à productResponse que é a lista atualizada vinda do método que subscrevemos
            this.products = productResponse

            // chamamos o método emitTotalProductsChange() que vem da productService passando o tamanho da lista
            this.productService.emitTotalProductsChange(productResponse.length)
        })
    }
}