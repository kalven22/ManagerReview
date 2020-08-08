import { Component } from '@angular/core';
import { DetailRepository } from '../model/detail.repository';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
public condition: boolean = false;
component = "HomeComponent";
constructor(private detailRepo: DetailRepository){}
  public entry: string = null;
  public show: boolean = true;
  get details(){
      return this.detailRepo.getDetails(this.entry);
  }

  changeEntry(entry?: string){
    this.entry = entry.toLowerCase();
    this.show = true;
  }


}
