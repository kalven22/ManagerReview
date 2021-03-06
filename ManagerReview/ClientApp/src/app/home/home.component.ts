import { Component } from '@angular/core';
import { DetailRepository } from '../model/detail.repository';
import {Router} from "@angular/router";
import { Detail } from '../model/detail.model';
@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public condition: boolean = false;
  public managerid: number = null;
  component = "HomeComponent";

  constructor(private detailRepo: DetailRepository, private router: Router) { }
  public entry: string = null;
  public show: boolean = true;
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
    this.managerid = managerid;
    console.log(this.managerid);
     
    this.router.navigateByUrl('/review', {state: {data: this.managerid, fsname: firstname}});
  }

  addreview(){
    this.router.navigateByUrl('/addreview');

  }

  selectedDetail: number;

  getSelected(detail: Detail) {
    return detail.managerid == this.selectedDetail;
  }


}
