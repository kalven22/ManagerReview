import { Injectable } from "@angular/core";
import { Review } from "./review.model";
import { AppDataSource } from "./app.datasource";

@Injectable()
export class ReviewRepository {
    private reviews: Review[] = [];
    
    constructor(private appDataSource: AppDataSource) {
        appDataSource.getReviewById().subscribe(data => {
            this.reviews = data;
            
        });
    }
    getReviews(entry: string = null): Review[] {
        return this.reviews;
    }  
}