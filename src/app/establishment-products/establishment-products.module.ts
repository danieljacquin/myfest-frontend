import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstablishmentProductsPageRoutingModule } from './establishment-products-routing.module';

import { EstablishmentProductsPage } from './establishment-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstablishmentProductsPageRoutingModule
  ],
  declarations: [EstablishmentProductsPage]
})
export class EstablishmentProductsPageModule {}
