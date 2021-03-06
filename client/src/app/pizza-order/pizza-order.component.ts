import { Component, OnInit } from '@angular/core';
import {GroupsService} from '../groups.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.less']
})
export class PizzaOrderComponent implements OnInit {

  constructor(public groupService: GroupsService,private userService: UserService) { }

  ngOnInit() {
  }

}
