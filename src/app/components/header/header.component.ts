import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // Data from parent component
  @Input() pageTitle: string;

  // Give data to parent component
  @Output() dataEmitter = new EventEmitter();

  terms: string = "Terms and Conditions";
  
  emittingFunction() {
    this.dataEmitter.emit(this.terms);
  }

  ngOnInit(): void {
    this.emittingFunction();
  }

}
