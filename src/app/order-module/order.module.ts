import { NgModule } from "@angular/core";
import { OrderContainerComponent } from "./order-container.component";
import { RouterModule, Routes } from "@angular/router";
import { OrdersListComponent } from "./components/orders-list/orders-list.component";
import { OrderItemComponent } from "./components/order-item/order-item.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: '', 
        component: OrderContainerComponent,
        children: [
            {path: '', component: OrdersListComponent},
        ]
    }
]

@NgModule({
    declarations: [
        OrderContainerComponent,
        OrdersListComponent,
        OrderItemComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes) 
    ],
    providers: [
    ]
})
export class OrderModule {

}