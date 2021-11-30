import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';

// importar componentes
import {RegisterEstablishmentComponent} from './register-establishment/register-establishment.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent} from './login/login.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    AuthPageRoutingModule,
  ],
  declarations: [
    AuthPage,
    RegisterEstablishmentComponent,
    RegisterUserComponent,
    LoginComponent]
})
export class AuthPageModule {}
