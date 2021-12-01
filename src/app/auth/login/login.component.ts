import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ConfigService} from '../../service/config.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario = "vhsalazar";
  contrasena = "Victor12345";

  constructor(public auth:AuthService,public config:ConfigService,  private router: Router,) { }
  
  ngOnInit() {}
  login(){
    const contrasenaEncode = btoa(this.contrasena);
    console.log(contrasenaEncode);
    this.auth.getLogin(this.usuario,contrasenaEncode).subscribe(
      (data:any)=>{ 
        this.config.set('token',data.token.token);
        this.config.set('idUser',data.obj[0].idPersona);

        if(data.obj[0].descripcion === 'Natural'){
            this.router.navigate(['/establishments']);
          }
        /*this.config.get('token').then((val)=>{
          console.log(val);
          
        }); */
      },
      (error)=>{
        console.log(error);
      });
  }

}
