import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { HomeProductsComponent } from './home-products/home-products.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
