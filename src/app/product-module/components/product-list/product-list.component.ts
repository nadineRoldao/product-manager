import { Component } from "@angular/core";
import { Product } from "../../models/product.model";

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent {

    products: Product[] = [{
        id: 1,
        name: 'lapis',
        price: 2.50,
        category: 'papelaria',
        link: 'a'
    }]

}