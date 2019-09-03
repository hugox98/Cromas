import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params} from '@angular/router';
import { UserListInterface } from 'src/app/models/userlist-interface';
import { ListUsersComponent } from 'src/app/components/expert/list-users/list-users.component';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-details-users',
  templateUrl: './details-users.component.html',
  styleUrls: ['./details-users.component.css']
})
export class DetailsUsersComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  private lote: UserListInterface;
  private id: ListUsersComponent;

  ngOnInit() {
    const user_id = this.route.snapshot.params["id"];
      this.getDetailsUserById(user_id);
  }

  /* detalles del usuario por id*/
  getDetailsUserById(id: string) {
    this.dataApi.getListUsersById(id)
    .subscribe((users: UserListInterface) => (this.lote = users));

  }

  /*Ingore*/
  details(id: string) {
    console.log(id);
    console.log(this.lote);

    return id;
  }

}
