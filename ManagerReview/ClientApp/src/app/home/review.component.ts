import { Component } from '@angular/core';
import { DetailRepository } from '../model/detail.repository';
import {Router} from "@angular/router";
import { HomeComponent } from './home.component';
import { ReviewRepository } from '../model/review.repository';
import { Review } from '../model/review.model';
@Component({
  selector: 'review',
  templateUrl: './review.component.html'
})
export class ReviewComponent {
 
  component = "ReviewComponent";
  managerid: number; firstname: string;lastname: string;company: string;team: string;
  
  reviewObj: Review;

  constructor(private router: Router, private reviewRepo: ReviewRepository) {}

  ngOnInit() {
    this.managerid=history.state.data;
    
    this.showAddReviewForm = history.state.viewForm;
    console.log(history.state.data);
    console.log(history.state.viewForm);
  }

  get reviews() {
    return this.reviewRepo.getReviewsByManagerId(this.managerid);
  }

  showAddReviewForm;
  review: string="";
  advice: string=""; fivestarrating:number = 5 ; approve: string = "Yes";
  addreview(){
    // this.router.navigateByUrl('/addreview');
    this.review = ""; this.advice=""; this.fivestarrating = 5 ; this.approve = "Yes";
    this.showAddReviewForm = true;
  }

  newReviewId;
  postReview(){
    
    console.log(this.review);
    console.log(this.advice);
    console.log(this.fivestarrating);
    console.log(this.approve);
    console.log(this.managerid);
   
    this.reviewObj = new Review();
    this.reviewObj.managerid=this.managerid;
    this.reviewObj.review=this.review;
    this.reviewObj.advice=this.advice;
    this.reviewObj.fivestarrating=this.stringToNumber(this.fivestarrating);
    this.reviewObj.approve=this.approve;
 
    this.reviewRepo.postReview(this.reviewObj)
            .subscribe(data => {   
              this.newReviewId = data.review;
              if(data.managerid == this.reviewObj.managerid){
                this.reviewRepo.reviews.push(this.reviewObj);
              }
              this.showAddReviewForm= false;
            });
  }
  stringToNumber(x: any): number{
    return Number(x);
  }

}
