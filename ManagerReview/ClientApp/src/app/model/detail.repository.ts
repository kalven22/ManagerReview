import { Injectable } from "@angular/core";
import { Detail } from "./detail.model";
import { DetailDataSource } from "./detail.datasource";

@Injectable()
export class DetailRepository {
    private details: Detail[] = [];
    
    constructor(private dataSource: DetailDataSource) {
        dataSource.getDetails().subscribe(data => {
            this.details = data;
            
        });
    }
    getDetails(entry: string = null): Detail[] {
        return this.details
            .filter(d => entry == null || 
                entry == d.firstname.toLowerCase() || 
                entry == d.lastname.toLowerCase()  || 
                entry == d.company.toLowerCase() );
    }

    
}