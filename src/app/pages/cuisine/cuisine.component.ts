import { Component, OnInit } from '@angular/core';
import Cuisine from '../../data/cuisine.interface';
import Recipe from '../../data/recipe.interface';
import { cuisines } from '../../data/cuisines';


@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  cuisines: Cuisine[] = cuisines;
  
  constructor() { }

  ngOnInit(): void {
  }

}
