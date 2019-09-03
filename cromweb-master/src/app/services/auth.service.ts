import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { isNullOrUndefined} from "util";
import { pipe, from } from 'rxjs';
import {Observable} from "rxjs/internal/Observable";

import {UserListInterface } from "../models/userlist-interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  registroUsuario(nombre: string, apePat: string, apeMat: string, correo: string, contrasena: string, rol: string){
    const url_api = "http://localhost:3000/usuario/nuevo";
    return this.http.post<UserListInterface>(url_api,
      {
        nombre: nombre,
        ape_pat : apePat,
        ape_mat : apeMat,
        correo : correo,
        rol : rol,
        contrasena : contrasena,
       },
       {headers: this.headers}
       )
       .pipe(map(user => user));
    }
    

    loginUsuario(correo: string, contrasena: string): Observable<any>{
      const url_api = "http://localhost:3000/login?include=user";
      return this.http.post<UserListInterface>(url_api,
       {
         correo,
         contrasena
       },
       { headers: this.headers}
         )
         .pipe(map(user => user));
    }

    setUsuario(user: UserListInterface): void{
      let user_string = JSON.stringify(user);
      localStorage.setItem("currentUser", user_string);
    }

    setToken(token): void {
      localStorage.setItem("accessToken",token);
    }

    getToken() {
      return localStorage.getItem("accessToken");
    }

    /*Saber el usuario que esta logeado en ese momento*/

   
    getCurrentUsuario(): UserListInterface {
      let user_string = localStorage.getItem("currentUser");
      if (isNullOrUndefined(user_string)) {
        let user: UserListInterface = JSON.parse(user_string);
        return user;
      } else {
        return null;
      }
    }

  
/*Metodo de logout del usuario, borra informacion del usuario y hace una peticion al servidor para deslogearse */
logoutUsuario(){
  let accessToken = localStorage.getItem('accessToken');
  const url_api = `http://localhost:3000/usuario?access_token=${accessToken}`;  
  localStorage.removeItem("accessToken");
  localStorage.removeItem("currrentUser");
  return this.http.post<UserListInterface>(url_api, {headers: this.headers});
}


}
