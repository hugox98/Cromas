import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService : AuthService) { }

  public app_name = "Ecologia, Sustentabilidad e Innovación";
  public isLogged : boolean = false;

  ngOnInit() {
    this.onCheckUser();
  }

  onLogout(): void {
    this.authService.logoutUsuario();
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUsuario() === null ) {
      this.isLogged = false ;
    } else {
      this.isLogged = true;
    }
  }

}
