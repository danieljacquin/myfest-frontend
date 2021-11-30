import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


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
  totalPrice: any = 0;
  totalunits: any = 0;
  constructor(
    private route: ActivatedRoute
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
  }

}
