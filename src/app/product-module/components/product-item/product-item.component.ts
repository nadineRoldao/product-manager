import { Component, Input } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";

@Component({
    selector: '[product-item]',
    templateUrl: 'product-item.component.html',
    styleUrls: ['product-item.component.css']
})
export class ProductItemComponent {

    // anotamos com @Input para indicarmos que queremos receber um dado do componente pai
    @Input()
    product!: Product

    constructor(private productService: ProductService) {
    }

    // método que dentro dele chamamos o método deleteProductById que vem da productService e passamos no parâmetro o id do elemento que será deletado
    // fazendo subscribe para sermos notificados quando houver mudança
    deleteProduct():void {
        this.productService.deleteProductById(this.product.id).subscribe({
            // quando finalizar, recarregar a página
            complete: () => {
                window.location.reload()
            },
        })
    }
}