import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ConfigService }  from '../service/config.service';
import {AlertController, ToastController } from '@ionic/angular';


interface Products {
  id: number;
  name: string;
  quantity: number;
  costoUnidad: number;
  isChecked: boolean;
  uid: number;
  idCabecera: number;
}
interface ProductDetails {
  totalPrice: number;
  totalQuantity: number;
  products: Products[];
}

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.page.html',
  styleUrls: ['./show-details.page.scss'],
})
export class ShowDetailsPage implements OnInit {

  data: any;
  totalPrice: number = 0;
  totalunits: number = 0;
  purchaseDetails: ProductDetails;
  idUser: any;

  constructor(
    private route: ActivatedRoute,
    private config: ConfigService,
    public toastController: ToastController
  ) {
    this.route.queryParams.subscribe(params => {
      if(params && params.data){
        this.data = JSON.parse(params.data);
      }
    });
   }

  ngOnInit() {

    console.log(this.data);
    for (const item of this.data) {
     this.totalPrice = this.totalPrice + (item.costoUnidad * item.prodCompra);
     this.totalunits= this.totalunits + item.prodCompra;
    }

    console.log(this.totalPrice);
    console.log(this.totalunits);
    this.purchaseDetails = {
      totalPrice: this.totalPrice,
      totalQuantity: this.totalunits,
      products: this.data
    };

    console.log(this.purchaseDetails);
    this.getToken();
  }

  async getToken(){
    this.idUser = await this.config.get('idUser');
    console.log(this.idUser);
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: "Compra realizada",
      duration: 2000,
    });
    await toast.present();
  }

  comprar(){
    this.presentToast();
  }

}
