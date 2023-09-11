import { NgModule } from "@angular/core";
import { ProductContainerComponent } from "./product-container.component";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CommonModule } from "@angular/common";
import { ProductItemComponent } from "./components/product-item/product-item.component";

const routes: Routes = [
    {
        path: '',
        component: ProductContainerComponent
    }
]

@NgModule({
    declarations: [
        ProductContainerComponent,
        ProductListComponent,
        ProductItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class ProductModule {

}