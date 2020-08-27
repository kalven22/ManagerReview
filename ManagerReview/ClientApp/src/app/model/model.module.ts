import { DetailRepository } from "./detail.repository";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppDataSource } from "./app.datasource";
import { ReviewRepository } from "./review.repository";

@NgModule({
  imports: [HttpClientModule],
  providers: [DetailRepository, AppDataSource, ReviewRepository]
})
export class ModelModule { }