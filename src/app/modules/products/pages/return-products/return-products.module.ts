import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnProductsRoutingModule } from './return-products-routing.module';
import { ReturnProductsComponent } from './return-products/return-products.component';


@NgModule({
  declarations: [
    ReturnProductsComponent
  ],
  imports: [
    CommonModule,
    ReturnProductsRoutingModule
  ]
})
export class ReturnProductsModule { }
 