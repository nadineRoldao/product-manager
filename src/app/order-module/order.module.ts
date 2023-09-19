import { NgModule } from "@angular/core";
import { OrderContainerComponent } from "./order-container.component";
import { RouterModule, Routes } from "@angular/router";
import { OrdersListComponent } from "./components/orders-list/orders-list.component";

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
        OrdersListComponent
    ],
    imports: [
        RouterModule.forChild(routes) 
    ],
    providers: [
    ]
})
export class OrderModule {

}