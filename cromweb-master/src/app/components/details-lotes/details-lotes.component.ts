import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params} from '@angular/router';
import { UserListInterface } from 'src/app/models/userlist-interface';
import { ListUsersComponent } from 'src/app/components/expert/list-users/list-users.component';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-details-lotes',
  templateUrl: './details-lotes.component.html',
  styleUrls: ['./details-lotes.component.css']
})
export class DetailsLotesComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  private loteinfo: UserListInterface;

  ngOnInit() {
    const lote_id = this.route.snapshot.params["id"];
    this.getDetailsUserByIdLote(lote_id);
}

/* lotes del usuario por id*/
getDetailsUserByIdLote(id: string) {
  this.dataApi.getListUsersByIdLote(id)
  .subscribe((lote: UserListInterface) => (this.loteinfo = lote));

  console.log(this.loteinfo);
}

}
