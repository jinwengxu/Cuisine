import { Component, OnInit } from '@angular/core';

// Import objects from the routing library 
import { ActivatedRoute, Params } from '@angular/router';

// Import interface and dataset
import Cuisine from '../../data/cuisine.interface';
import Recipe from '../../data/recipe.interface';
import { cuisines } from '../../data/cuisines';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  // Create a property to capture the :id in url
  id: string;

  cuisine: Cuisine;

  likeRecipe = (name) => alert("You have liked the " + name + " recipe!");

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.id = params.id;      

      this.cuisine = cuisines.find((cuisine) => {        
        return cuisine.id.toString() === params.id;
      });

      console.log(this.cuisine);
    });
  }

}
