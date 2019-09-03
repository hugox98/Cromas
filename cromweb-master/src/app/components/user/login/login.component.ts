import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {UserListInterface } from 'src/app/models/userlist-interface';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  private usuario: UserListInterface = {
    correo: '',
    contrasena: ''
  };

  public isError = false;

  ngOnInit() {
  }

  onLogin(form: NgForm) {
   
    if(form.valid){
      return this.authService.loginUsuario(
        this.usuario.correo,
        this.usuario.contrasena
        )
      .subscribe(usuario => {
        this.authService.setUsuario(usuario.usuario)
        let token = usuario.id;
        this.authService.setToken(token);
        this.router.navigate(['user/profile/profile']);
      
        this.isError = false;
      },
      error => this.onIsError()
      );
    } else{
      this.onIsError();
    }
 
  }
  onIsError(): void{
    this.isError = true;
    setTimeout(() => {
      this.isError =false;
    }, 4000);
  }
}
