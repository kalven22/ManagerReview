import { Injectable } from "@angular/core";
import { Detail } from "./detail.model";
import { AppDataSource } from "./app.datasource";

@Injectable()
export class DetailRepository {
    private details: Detail[] = [];
    
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
}