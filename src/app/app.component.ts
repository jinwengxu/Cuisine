import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pageTitle: string;  // <h1> title passing to Header component

  // Data passed from child component (Header component)
  terms: string;
  captureEmittedData(emittedData: string) {
    this.terms = emittedData;
  }

  seeTerms = () => alert("Do not use our recipes without giving us credit! We work very hard to provide these wonderful recipes. Say Thanks!");
  

  ngOnInit() {

    // <h1> title passing to Header component
    this.pageTitle = 'Check out my new Recipe App!';
  }
}
