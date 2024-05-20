import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnProductsComponent } from './return-products/return-products.component';

const routes: Routes = [
  {
    path:'',
    component: ReturnProductsComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnProductsRoutingModule { }
