import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-pizza-group',
  templateUrl: './new-pizza-group.component.html',
  styleUrls: ['./new-pizza-group.component.less']
})
export class NewPizzaGroupComponent implements OnInit {
  userLocation: string;
  numberOfBoxes: number = 1;
  isKosher: boolean = true;
  startNumberOfSlices: number = 1;
  groupName : string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  public getLocationHebrewName(englishName: string) {
    if (englishName == "PazGaz") {
      return "פז גז"; 
    }

    if (englishName == "Mifkada") {
      return "מפקדה"; 
    }

    if (englishName == "Eged") {
      return "אגד"; 
    }

    return "סהר עשה פאדיחה :)";
  }
}
