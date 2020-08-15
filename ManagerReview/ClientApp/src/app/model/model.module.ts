import { DetailRepository } from "./detail.repository";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppDataSource } from "./app.datasource";

@NgModule({
  imports: [HttpClientModule],
  providers: [DetailRepository, AppDataSource]
})
export class ModelModule { }