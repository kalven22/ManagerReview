import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { ReviewComponent } from "./review.component";
import { AddreviewComponent } from "./addreview.component";

@NgModule({
    declarations:[HomeComponent, ReviewComponent, AddreviewComponent],
    imports: [ModelModule, BrowserModule, FormsModule],
    exports: [HomeComponent, ReviewComponent, AddreviewComponent]
    
})
export class HomeModule { }