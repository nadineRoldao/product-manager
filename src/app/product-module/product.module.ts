import { NgModule } from "@angular/core";
import { ProductContainerComponent } from "./product-container.component";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductService } from "./services/product.service";
import { ProductFormComponent } from "./components/product-form/product-form.component";

const routes: Routes = [
    {
        path: '', 
        component: ProductContainerComponent,
        children: [
            {path: '', component: ProductListComponent},
            {path: 'detail/:id', component: ProductDetailComponent},
            {path: 'form', component: ProductFormComponent}
        ]
    }
]

@NgModule({
    declarations: [
        ProductContainerComponent,
        ProductListComponent,
        ProductItemComponent,
        ProductDetailComponent,
        ProductFormComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {

}