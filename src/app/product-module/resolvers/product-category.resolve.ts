import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { ProductCategory } from "../models/product-category.model";
import { Observable } from "rxjs";
import { ProductService } from "../services/product.service";
import { inject } from "@angular/core";

export const ProductCategoryResolver: ResolveFn<ProductCategory[]> = function(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot, 
    productService: ProductService = inject(ProductService)): Observable<ProductCategory[]> {
    
        return productService.getProductCategories() 
}