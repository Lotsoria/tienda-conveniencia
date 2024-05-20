import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProductsComponent } from './modules/products/home-products/home-products.component';
import { LoginGuard } from './shared/guard/login.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule),
    canActivate: [LoginGuard],
  },
  {
    path: '',
    component: HomeProductsComponent,
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    canActivate: [LoginGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**', // Captura cualquier ruta no definida
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
