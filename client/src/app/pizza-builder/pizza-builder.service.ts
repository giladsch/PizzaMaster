import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaBuilderService {

  public personsInOrder: Array<personInOrder>;

  constructor() { 
    this.personsInOrder = [{userId: "gidi", slices:5}];
  
  }

  public addSlices(personsInOrder: Array<personInOrder>) : void{
    const arr: Array<personInOrder> = [];

    personsInOrder.forEach(p => {
      let person =  this.personsInOrder.find(i => i.userId == p.userId);
      if(person){
        person.slices += p.slices;
      } else {
        arr.push(p);
      }
    });

    this.personsInOrder.concat(arr);
  }
  
}

export class personInOrder{
  userId: string;
  slices: number;
}

