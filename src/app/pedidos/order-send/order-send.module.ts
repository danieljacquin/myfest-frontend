import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderSendPageRoutingModule } from './order-send-routing.module';

import { OrderSendPage } from './order-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderSendPageRoutingModule
  ],
  declarations: [OrderSendPage]
})
export class OrderSendPageModule {}
