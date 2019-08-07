import {Component, Input, OnInit} from '@angular/core';
import {LocationsEnum, UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  ngOnInit() {

  }

  name: string;
  location: LocationsEnum;

  public Connect(){
    this.userService.InitUser(this.name, this.location)

  }


}
