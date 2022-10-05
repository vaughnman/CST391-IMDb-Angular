import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeButtonComponent } from './home-button/home-button.component';
import { AlbumComponent } from './album/album.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { AddReviewCardComponent } from './add-review-card/add-review-card.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAlbumComponent,
    HomeComponent,
    AlbumsComponent,
    AboutUsComponent,
    AlbumCardComponent,
    HomeButtonComponent,
    AlbumComponent,
    ReviewCardComponent,
    AddReviewCardComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
