import { DetailRepository } from "./detail.repository";

import { HttpClientModule } from "@angular/common/http";

import { NgModule } from "@angular/core";
import { DetailDataSource } from "./detail.datasource";

@NgModule({
  imports: [HttpClientModule],
  providers: [DetailRepository, DetailDataSource]
})
export class ModelModule { }