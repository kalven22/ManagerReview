import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './home/review.component';
import { AddreviewComponent } from './home/addreview.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, HomeModule, FormsModule, BrowserModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "review", component: ReviewComponent },
      { path: "addreview", component: AddreviewComponent },
      { path: "**", redirectTo: "/home" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
