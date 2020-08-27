import { Injectable } from "@angular/core";
import { Detail } from "./detail.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Review } from "./review.model";
@Injectable()
export class AppDataSource {
  private details: Detail[] = [];
  private baseUrl: string;

 PROTOCOL = "https";
 PORT = 5001;

  constructor(private http: HttpClient) {
    this.baseUrl = `${this.PROTOCOL}://${location.hostname}:${this.PORT}/`;
  }

  getDetails(): Observable<Detail[]> {
    return this.http.get<Detail[]>(this.baseUrl + "api/detail/");
  }

  postDetails(detail: Detail): Observable<Detail> {
    return this.http.post<Detail>(this.baseUrl + "api/detail/", detail);
  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.baseUrl + "api/review/");
  }

  // getReviewById(id?:number): Observable<Review[]>{
  //   return this.http.get<Review[]>(this.baseUrl + "api/review/" + id);
  // }
  
}