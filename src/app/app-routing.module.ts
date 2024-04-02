import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./admin/cart/cart.module').then(m => m.CartModule)
  },
  // {
  //   path: 'category',
  //   loadChildren: () => import('./admin/category/category.module').then(m => m.CategoryModule)
  // }
  {
    path: 'login',
    loadChildren: () => import('./admin/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./admin/order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./admin/products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
