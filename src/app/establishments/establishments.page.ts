import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ConfigService }  from '../service/config.service';

interface User {
  id: number;
  idTpersona: number;
  nombre: string;
  correo: string;
  telefono1: number;
  telefono2: number;
  nit: number;
  terminos: number;
}

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.page.html',
  styleUrls: ['./establishments.page.scss'],
})
export class EstablishmentsPage implements OnInit {

  /*establishments: User[] = [
    {
      id: 2,
      idTpersona: 2,
      nombre: 'Donde Fercho',
      correo: 'dondeFercho@gmail.com',
      telefono1: 3556698,
      telefono2: null,
      nit: 1155579541,
      terminos: 1,
    },
    {
    id: 3,
    idTpersona: 2,
    nombre: 'El Punto de encuentro',
    correo: 'elpuntodeencuentro@gmail.com',
    telefono1: 3219971252,
    telefono2: null,
    nit: 11548965348,
    terminos: 1,
  },
    {
    id: 4,
    idTpersona: 2,
    nombre: 'Los Barriles',
    correo: 'barriles@gmail.com',
    telefono1: 4661468,
    telefono2: null,
    nit: 111257989,
    terminos:1
  }
  ];*/
  establishments: User[] = [];
  token: any;

  constructor(private router: Router, private http: HttpClient, private config: ConfigService) { }

  ngOnInit() {
    this.getToken();
  }

  getEstablishments(){
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer '+this.token 
    });

    this.http.get('https://myfest-back.herokuapp.com/empresas',{headers: headers}).subscribe((data: User[]) => {
      this.establishments = data;
    });
  }

  goProducts(id: number){
    console.log(id);
    this.router.navigate(['/establishment-products']);
  }

 async getToken(){
    this.token = await this.config.get('token');
    console.log(this.token);
    this.getEstablishments();
  }

}
