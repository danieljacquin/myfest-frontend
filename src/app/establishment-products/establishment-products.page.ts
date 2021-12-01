import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ConfigService }  from '../service/config.service';


interface Products {
  idProducto: number;
  descripcion: string;
  prodCompra: number;
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
  selector: 'app-establishment-products',
  templateUrl: './establishment-products.page.html',
  styleUrls: ['./establishment-products.page.scss'],
})
export class EstablishmentProductsPage implements OnInit {

  id: any;
  selectedProducts: Products[]= [];
  totalPrice: any;

  /*products: Products[] = [
    {id: 4, name: 'cerveza', quantity: 1, price: 5500, isChecked: false, uid: 11, idCabecera: 1},
    {id: 2, name: 'Botella aguardiente blanco', quantity: 1, price: 55000, isChecked: false, uid: 12, idCabecera: 1},
    {id: 3, name: 'Cajetilla de marlboro', quantity: 1, price: 1000, isChecked: false, uid: 12, idCabecera: 1}
  ];*/
  products: Products[] = [];
  buyProducts: any;
  token: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private config: ConfigService
  ) { }

  ngOnInit() {
    this.getToken();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  getProducts(){
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+this.token 
    });
    this.http.get('https://myfest-back.herokuapp.com/detalleInventario/'+this.id,{headers: headers}).subscribe((data: Products[]) => {
      this.products = data;
      console.log(this.products);
    });
  }

  showDetails(){

  this.selectedProducts = this.products.filter(product =>  product.isChecked === true);

    console.log(this.selectedProducts);

    const extras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.selectedProducts)
      }
    };

    this.router.navigate(['/show-details'],extras);

  }

  async getToken(){
    this.token = await this.config.get('token');
    console.log(this.token);
    this.getProducts();
  }

}
