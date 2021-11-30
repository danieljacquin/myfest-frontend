import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pedidos/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pedidos/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'establishments',
    loadChildren: () => import('./establishments/establishments.module').then( m => m.EstablishmentsPageModule)
  },
  {
    path: 'establishment-products/:id',
    loadChildren: () => import('./establishment-products/establishment-products.module').then( m => m.EstablishmentProductsPageModule)
  },
  {
    path: 'show-details',
    loadChildren: () => import('./show-details/show-details.module').then( m => m.ShowDetailsPageModule)
  },
  {
    path: 'order-send',
    loadChildren: () => import('./pedidos/order-send/order-send.module').then( m => m.OrderSendPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
