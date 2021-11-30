import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://myfest-back.herokuapp.com/";
  constructor(public http: HttpClient) { }

  // getDatos(){
  //   const headers = new HttpHeaders({
  //     'Content-Type':'application/json',
  //     'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9teWZlc3QtYmFjay5oZXJva3VhcHAuY29tXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzODE2NTc4NiwiZXhwIjoxNjM4MTY5Mzg2LCJuYmYiOjE2MzgxNjU3ODYsImp0aSI6Ijd1TlJybW5nY3FuNlJ2ZkciLCJzdWIiOjEsInBydiI6ImE3ZTllNzcxZjViZWJkZGQyNTUyMGFmZTI1MTI5N2Q3NjlmMmU4YTQifQ.KNiHLmlX8q9ymDT7K-oB5AoRlnc8ZP6kbyCeN7a7rco' }) 
  //     return this.http.get("https://myfest-back.herokuapp.com/empresas",{headers:headers});
  // }
  getLogin(usuario,contrasena){
    const headers = new HttpHeaders({
          'Content-Type':'application/json'
    });

    const params = new HttpParams().set('username',usuario).set('password',contrasena);

    const body = {'username':usuario,'password':contrasena};
    return this.http.post(this.url+"auth/login",body,{params:params,responseType: 'json'});
  }
}