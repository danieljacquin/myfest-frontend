import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'establishments',
    pathMatch: 'full'
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
