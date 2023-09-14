import { Component } from "@angular/core";
import { ProductService } from "./services/product.service";

@Component({
    selector: 'product-container',
    templateUrl: 'product-container.component.html',
    styleUrls: ['product-container.component.css']
})
export class ProductContainerComponent {

    // definimos totalProducts como 0 apenas para inicializar a variavel
    totalProducts = 0

    // criando um contrutor que recebe productService
    constructor(productService: ProductService) {
        // recuperando a variavel totalProductsObservable que é um observable e dando um subscribe para ser notificado quando houver alteração na lista
        productService.totalProductsObservable.subscribe({
            // quando for alterada, então totalProducts é igual à total que vem do parâmetro da função next()
            next: (total: number) => {
                this.totalProducts = total
            } 
        })
    }
}