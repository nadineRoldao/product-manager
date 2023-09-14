import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// criando um array de objetos que serão nossas rotas
const routes: Routes = [
  {
    path: '', //aqui colocamos o caminho que irá levar até a página principal
    component: AppComponent, //pagina principal
    children: [ //um array que contém as rotas filhas
      {
        path: 'products', //rota filha
        // redirecionando para a product-module
        loadChildren: () => import('./product-module/product.module').then(m => m.ProductModule)
      }
    ]
  }
];

@NgModule({
  // importando RouterModule que vem do próprio angular passando as rotas
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
