import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import page components
import { HomeComponent } from './pages/home/home.component';
import { CuisineComponent } from './pages/cuisine/cuisine.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cuisine',
    component: CuisineComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'cuisine/:id',
    component: RecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
