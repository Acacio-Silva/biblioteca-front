import { BookComponent } from './components/book/book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ReadBooksComponent } from './components/read-books/read-books.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:'read-books', component: ReadBooksComponent},
  {path:'my-profile', component: ProfileComponent},
  {path:'ranking', component: RankingComponent},
  {path:'book/:id', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
