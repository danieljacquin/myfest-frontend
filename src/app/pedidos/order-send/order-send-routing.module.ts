import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderSendPage } from './order-send.page';

const routes: Routes = [
  {
    path: '',
    component: OrderSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderSendPageRoutingModule {}
