import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'devolucion',
    loadChildren: () =>
      import('./pages/return-products/return-products.module').then(
        (m) => m.ReturnProductsModule
      ),
  },
  {
    path: 'ver',
    loadChildren: () =>
      import('./pages/view-products/view-products.module').then(
        (m) => m.ViewProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
