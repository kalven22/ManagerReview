import { Component } from '@angular/core';
import { DetailRepository } from '../model/detail.repository';
import { Router } from "@angular/router";
import { Detail } from '../model/detail.model';
import { Observer, Observable } from 'rxjs';
@Component({
    selector: 'addreview',
    templateUrl: './addreview.component.html'
})
export class AddreviewComponent {
    
    public condition: boolean = false;
    component = "AddreviewComponent";
    public entry: string = null;
    public showList: boolean = false;

    constructor(private detailRepo: DetailRepository, private router: Router) { }

    get details() {
        return this.detailRepo.getDetails(this.entry);
    }

    changeEntry(entry?: string) {
        this.entry = entry.toLowerCase();
        this.showList = true;
        this.showForm = false;
    }
    public managerid: number;
    onListSelect(managerid?: number, firstname?: string,
        lastname?: string,
        company?: string,
        team?: string) {
        this.firstname = firstname.toUpperCase();
        this.managerid = managerid;
      console.log(this.managerid);

      this.router.navigateByUrl('/review', { state: { data: this.managerid, viewForm: true } });

    }

    firstname: string = "";
    lastname: string = "";
    company: string = "";
    team: string = "";

    selectedDetail: number;

    getSelected(detail: Detail) {
        return detail.managerid == this.selectedDetail;
    }

    public showForm = false;
    addNewManager() {
        this.showForm = true;
        this.showList = false;
    }

    public tempMessage = "";
    public showSuccess = false;
    public number: number;
    public newManagerId: number;
    postDetail() {
        this.detailRepo.postDetails(this.firstname, this.lastname, this.company, this.team)
            .subscribe(data => {
                this.newManagerId = data.managerid;
                this.showForm = false;
                this.tempMessage = "Profile Created!"
                
                this.showSuccess = true;

            });
    }

    addfirstreview(){
        this.router.navigateByUrl('/review', {state: {data: this.newManagerId, viewForm: true}});
    }

}
