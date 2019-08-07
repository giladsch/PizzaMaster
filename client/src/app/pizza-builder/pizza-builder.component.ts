import { Component, OnInit } from '@angular/core';
import { personInOrder, PizzaBuilderService } from './pizza-builder.service';
 
@Component({
  selector: 'app-pizza-builder',
  templateUrl: './pizza-builder.component.html',
  styleUrls: ['./pizza-builder.component.less']
})
export class PizzaBuilderComponent implements OnInit {
Arr = Array;
  constructor(public pizzaBuilderService: PizzaBuilderService) { }

  ngOnInit() {
  }


}

