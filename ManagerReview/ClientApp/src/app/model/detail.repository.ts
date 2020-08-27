import { Injectable } from "@angular/core";
import { Detail } from "./detail.model";
import { AppDataSource } from "./app.datasource";
import { TemplateAst } from "@angular/compiler";

@Injectable()
export class DetailRepository {
    private details: Detail[] = [];
    newDetail: Detail; resultDetail: Detail;
    constructor(private appDataSource: AppDataSource) {
        appDataSource.getDetails().subscribe(data => {
            this.details = data;
            
        });
    }
    getDetails(entry: string = null): Detail[] {
        return this.details
            .filter(d => entry == null || 
                entry == ""||
                entry == d.firstname.toLowerCase() || 
                entry == d.lastname.toLowerCase()  || 
                entry == d.company.toLowerCase() ||
                entry == d.firstname.toLowerCase() + " " + d.lastname.toLowerCase() ||
                entry == d.lastname.toLowerCase() + " " + d.firstname.toLowerCase()
                );
    }  
    
    postDetails(firstname?: string, lastname?: string, company?: string, team?: string) {
        this.newDetail = new Detail();
        this.resultDetail = new Detail();
        this.newDetail.firstname = firstname;
        this.newDetail.lastname = lastname;
        this.newDetail.company = company;
        this.newDetail.team = team;

        this.appDataSource.postDetails(this.newDetail).subscribe(data => {
            this.resultDetail = data;
        });
    }
}