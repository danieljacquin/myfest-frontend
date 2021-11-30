import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getProducts();
  }

  getProducts(){
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9teWZlc3QtYmFjay5oZXJva3VhcHAuY29tXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzODI0NjM2NSwiZXhwIjoxNjM4MjQ5OTY1LCJuYmYiOjE2MzgyNDYzNjUsImp0aSI6ImNUZEliT0hUYlBVeUx1OFIiLCJzdWIiOjEsInBydiI6ImE3ZTllNzcxZjViZWJkZGQyNTUyMGFmZTI1MTI5N2Q3NjlmMmU4YTQifQ.ZCQKUnmy36ReGaq2BgLdhpAiznawmw77YOuehfLTGsU' 
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

}
