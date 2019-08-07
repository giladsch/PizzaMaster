import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {SliderType} from 'igniteui-angular';

@Component({
  selector: 'app-group-search',
  templateUrl: './group-search.component.html',
  styleUrls: ['./group-search.component.less']
})
export class GroupSearchComponent implements OnInit {

  constructor(public userService: UserService) { }
  public sliderType = SliderType;
  public sliceRange = {
    lower: 2,
    upper: 3
  };
  public volume = 4;
  ngOnInit() {
  }
}
