import { Component } from '@angular/core';
import { DetailRepository } from '../model/detail.repository';
import {Router} from "@angular/router";
import { HomeComponent } from './home.component';
import { ReviewRepository } from '../model/review.repository';
@Component({
  selector: 'review',
  templateUrl: './review.component.html'
})
export class ReviewComponent {
 
  component = "ReviewComponent";
  managerid: number;
  firstname: string;
  lastname: string;
  company: string;
  team: string;

  constructor(private router: Router, private reviewRepo: ReviewRepository) {}

  ngOnInit() {
    this.managerid=history.state.data;
    this.firstname=history.state.fsname;
    console.log(history.state.data);
    console.log(history.state.fsname);
  }

  get reviews() {
    return this.reviewRepo.getReviewsByManagerId(this.managerid);
  }

  addreview(){
    this.router.navigateByUrl('/addreview');

  }

}
