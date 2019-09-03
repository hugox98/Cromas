import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { UserListInterface } from '../models/userlist-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  user: Observable<any>;
  users: Observable<any>;

  constructor(private http: HttpClient) { }

  /* todos los usuarios */
  getAllUsers() {
    const url = 'http://localhost:3000/usuario/todos';
    return this.http.get(url);
  }

  /* user + rol */
  getListUsersByRol(rol: string) {
    const url = `http://localhost:3000/usuario/rol/${rol}`;
    return (this.user = this.http.get(url));
  }

  /* user + lote */
  getListUsersById(id: string) {
    const url = `http://localhost:3000/usuario/informacion/${id}`;
    return (this.user = this.http.get(url));
  }

 /* informacion del lote por id de lote*/
 getListUsersByIdLote(id: string) {
  const url = `http://localhost:3000/muestra/${id}`;
  return (this.user = this.http.get(url));
}

 /* informacion del lote por id de lote*/
 getListUsersByIdCroma(id: string) {
  const url = `http://localhost:3000/croma/${id}`;
  return (this.user = this.http.get(url));
}

}
