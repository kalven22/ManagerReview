import { Injectable } from "@angular/core";
import { Review } from "./review.model";
import { AppDataSource } from "./app.datasource";
import { Observable } from "rxjs";

@Injectable()
export class ReviewRepository {
    public reviews: Review[] = [];
    
    constructor(private appDataSource: AppDataSource) {
        appDataSource.getReviews().subscribe(data => {
            this.reviews = data;
            
        });
    }
    getReviewsByManagerId(managerId: number = null): Review[] {
        return this.reviews
            .filter(d => managerId == d.managerid);
    }  

    postReview(reviewObj: Review): Observable<Review> {
        return this.appDataSource.postReview(reviewObj);
    }
}