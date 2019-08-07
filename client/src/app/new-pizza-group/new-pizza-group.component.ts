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
     this.userLocation = userService.GetCurrentUser().location;
  }

  ngOnInit() {
  }

}
