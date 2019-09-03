import { Component, OnInit } from '@angular/core';
import { UserListInterface } from 'src/app/models/userlist-interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private authService: AuthService) { }
    user: UserListInterface;

    ngOnInit() {
      this.user = this.authService.getCurrentUsuario();
      console.log(this.user);
  }
}
