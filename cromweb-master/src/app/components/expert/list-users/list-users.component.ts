import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { UserListInterface } from 'src/app/models/userlist-interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private user: UserListInterface;

  ngOnInit() {
    this.getListUser();
  }

  /* todos los usuarios */
  getListUser() {
    this.dataApi.getAllUsers()
    .subscribe((users: UserListInterface) => (this.user = users));


  }

  /* ignore */
   details(id: string) {
    console.log(id);
    console.log(this.user);

    return id;
  }


}
