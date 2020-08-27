import { Component } from '@angular/core';
import { DetailRepository } from '../model/detail.repository';
import {Router} from "@angular/router";
import { Detail } from '../model/detail.model';
@Component({
  selector: 'addreview',
  templateUrl: './addreview.component.html'
})
export class AddreviewComponent {
  public condition: boolean = false;
  public managerid: number = null;
  component = "AddreviewComponent";
  public entry: string = null;
  public show: boolean = false;
  constructor(private detailRepo: DetailRepository, private router: Router) { }

  
  get details() {
    return this.detailRepo.getDetails(this.entry);
  }
  changeEntry(entry?: string) {
    this.entry = entry.toLowerCase();
    this.show = true;

  }

  onListSelect(managerid?: number, firstname?: string,
    lastname?: string,
    company?: string,
    team?: string) {
    this.firstname = firstname.toUpperCase();
    this.managerid = managerid;
    console.log(this.managerid);
    this.show = false;
     
  }

  firstname: string="";
//   getFirstname() {
//     return this.firstname;
//   }

  selectedDetail: number;

  getSelected(detail: Detail) {
    return detail.managerid == this.selectedDetail;
  }


}
