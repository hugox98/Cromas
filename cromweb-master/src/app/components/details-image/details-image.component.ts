import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute } from '@angular/router';
import { UserListInterface } from 'src/app/models/userlist-interface';
import { CromaInterface } from 'src/app/models/croma-interface';

@Component({
  selector: 'app-details-image',
  templateUrl: './details-image.component.html',
  styleUrls: ['./details-image.component.css']
})
export class DetailsImageComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  private cromainfo: UserListInterface;
  private croma: CromaInterface;
  public isEdit : boolean = false;

  ngOnInit() {
    const croma_id = this.route.snapshot.params["id"];
    this.getDetailsUserByIdCroma(croma_id);
}

/* lotes del usuario por id*/
getDetailsUserByIdCroma(id: string) {
  this.dataApi.getListUsersByIdCroma(id)
  .subscribe((lote: UserListInterface) => (this.cromainfo = lote));

  console.log(this.cromainfo);
}

edit() {
  this.isEdit = true;
}

save() {

  this.isEdit = false;
}


}
