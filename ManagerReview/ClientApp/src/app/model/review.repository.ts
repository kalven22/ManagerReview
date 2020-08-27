import { Injectable } from "@angular/core";
import { Review } from "./review.model";
import { AppDataSource } from "./app.datasource";

@Injectable()
export class ReviewRepository {
    private reviews: Review[] = [];
    
    constructor(private appDataSource: AppDataSource) {
        appDataSource.getReviews().subscribe(data => {
            this.reviews = data;
            
        });
    }
    getReviewsByManagerId(managerId: number = null): Review[] {
        return this.reviews
            .filter(d => managerId == d.managerid);
    }  
}