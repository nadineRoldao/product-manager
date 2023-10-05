import { NgModule } from "@angular/core";
import { OrderContainerComponent } from "./order-container.component";
import { RouterModule, Routes } from "@angular/router";
import { OrdersListComponent } from "./components/orders-list/orders-list.component";
import { OrderItemComponent } from "./components/order-item/order-item.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OrderDetailComponent } from "./components/order-detail/order-detail.component";
import { OrderService } from "./services/order.service";
import { OrderFormComponent } from "./components/order-form/order-form.component";

const routes: Routes = [
    {
        path: '', 
        component: OrderContainerComponent,
        children: [
            {path: '', component: OrdersListComponent},
            {path: 'detail/:id', component: OrderDetailComponent},
            {path: 'form', component: OrderFormComponent}
        ]
    }
]

@NgModule({
    declarations: [
        OrderContainerComponent,
        OrdersListComponent,
        OrderItemComponent,
        OrderDetailComponent,
        OrderFormComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes) 
    ],
    providers: [
        OrderService
    ]
})
export class OrderModule {

}