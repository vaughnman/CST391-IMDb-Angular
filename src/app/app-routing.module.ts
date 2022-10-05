import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumComponent } from './add-album/add-album.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-album', component: AddAlbumComponent },
  { path: 'update-album/:id', component: AddAlbumComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'albums', component: AlbumsComponent },
];

/** Module that handles routing */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
