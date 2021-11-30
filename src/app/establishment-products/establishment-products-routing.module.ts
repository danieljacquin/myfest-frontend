import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstablishmentProductsPage } from './establishment-products.page';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstablishmentProductsPageRoutingModule {}
