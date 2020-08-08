import { Injectable } from "@angular/core";
import { Detail } from "./detail.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class DetailDataSource {
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
  
}