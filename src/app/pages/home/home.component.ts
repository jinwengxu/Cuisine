import { Component, OnInit } from '@angular/core';
import Cuisine from '../../data/cuisine.interface';
import Recipe from '../../data/recipe.interface';
import { cuisines} from '../../data/cuisines';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cuisines: Cuisine[] = cuisines;

  constructor() { }

  ngOnInit(): void {
  }

}
