import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewProductsRoutingModule } from './view-products-routing.module';
import { ViewProductsComponent } from './view-products/view-products.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewProductsComponent
  ],
  imports: [
    CommonModule,
    ViewProductsRoutingModule,
    SharedModule
  ]
})
export class ViewProductsModule { }
