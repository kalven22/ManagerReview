import { Component } from '@angular/core';
import { DetailRepository } from '../model/detail.repository';
import {Router} from "@angular/router";
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

  onListSelect(managerid?: number) {
    this.managerid = managerid;
    console.log(this.managerid);
    this.router.navigateByUrl("/review");
  }


}
