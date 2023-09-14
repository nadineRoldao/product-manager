import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})

// essa classe implementa métodos da interface OnInit
export class ProductDetailComponent implements OnInit {

    // criado um produto do tipo Product e colocando uma promise que diz que a variável será inicializada posteriormente
    product!: Product

    constructor(private route: ActivatedRoute, private productService: ProductService) {}

    // implementando o metodo ngOnInit que executa os métodos que estão sendo chamados dentro dele quando a página iniciar
    ngOnInit(): void {

        // damos subscribe para observarmos os parâmetros da rota
        this.route.params.subscribe((routeParameters: any) => {

            // chamando o método getProductById da productService passando o id do produto e chamando a função subscribe que recebe produto
            this.productService.getProductById(routeParameters.id).subscribe((product: Product) => {

                // então product que vem da classe é igual à product que está sendo passada no parâmetro de subscribe
                this.product = product
            })
            
        })
    }

}