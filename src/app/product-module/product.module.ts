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
import { FormsModule } from "@angular/forms";

// criando array com as rotas
const routes: Routes = [
    {
        path: '', 
        component: ProductContainerComponent,
        // rotas filhas
        children: [
            {path: '', component: ProductListComponent},
            //:id indica que essa parte da url é dinâmica
            {path: 'detail/:id', component: ProductDetailComponent}, 
            {path: 'form', component: ProductFormComponent}
        ]
    }
]

@NgModule({
    // importando nossos componentes
    declarations: [
        ProductContainerComponent,
        ProductListComponent,
        ProductItemComponent,
        ProductDetailComponent,
        ProductFormComponent
    ],
    // imports de nodulos do angular
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes) 
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {

}