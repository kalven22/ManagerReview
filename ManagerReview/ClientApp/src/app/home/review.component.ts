import { Component } from '@angular/core';
import { DetailRepository } from '../model/detail.repository';
import {Router} from "@angular/router";
@Component({
  selector: 'review',
  templateUrl: './review.component.html'
})
export class ReviewComponent {
 
  component = "ReviewComponent";

  constructor(private router: Router) { }
 



}
