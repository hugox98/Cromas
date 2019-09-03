import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {UserListInterface } from 'src/app/models/userlist-interface';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  private usuario: UserListInterface={
    nombre:"",
    ape_pat: "",
    ape_mat: "",
    correo: "",
    contrasena: "",
    rol: ""
  };
  public isError = false;
  ngOnInit() {
  }
  onRegistro(form: NgForm): void{
    if(form.valid){
      this.authService.registroUsuario(
        this.usuario.nombre,
        this.usuario.ape_pat,
        this.usuario.ape_mat,
        this.usuario.correo, 
        this.usuario.contrasena,
        this.usuario.rol
        )
        .subscribe(usuario=>{
          this.authService.setUsuario(usuario);
          let token = usuario.id;
          this.authService.setToken(token);
          this.router.navigate(["/user/login/login"]);  //a la hora que valida el token me redirige al login para que proceda el logeo
        },
  
       
      );
    }else {
     
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



