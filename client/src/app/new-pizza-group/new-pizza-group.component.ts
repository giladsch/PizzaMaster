import { Component, OnInit } from '@angular/core';
import { UserService, LocationsEnum } from '../user.service';
import { GroupsService } from '../groups.service';

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

  constructor(private userService: UserService, private groupService: GroupsService) {
  }

  ngOnInit() {
  }

  public getSliderValue() {
    return Math.floor(this.startNumberOfSlices / 100);
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

  public Create() {
    this.groupService.JoinToGroup({
      buyingUsers:[],
      expireDate: new Date(),
      location: LocationsEnum.PazGaz,
      name: this.groupName
    },this.userService.GetCurrentUser(), Math.floor(this.startNumberOfSlices / 100))
  }
}
