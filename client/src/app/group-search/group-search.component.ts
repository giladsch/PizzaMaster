import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {SliderType} from 'igniteui-angular';
import {GroupsService, IGroup} from '../groups.service';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.less']
})
export class GroupSearchComponent implements OnInit {

  constructor(public userService: UserService, public groupService: GroupsService) { }
  public sliderType = SliderType;
  public sliceRange = {
    lower: 2,
    upper: 3
  };

  public JoinToGroup(group:IGroup){
    this.groupService.JoinToGroup(group,this.userService.GetCurrentUser(),this.sliceRange.upper)
  }

  public volume = 4;
  ngOnInit() {
  }
}
