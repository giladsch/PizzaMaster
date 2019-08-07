import { Injectable } from '@angular/core';
import {LocationsEnum} from './user.service';
import {reduce} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private groups: IGroup[];

  constructor() {
    this.groups = this.GetAllGroups();
  }

  private GetAllGroups(): IGroup[]{
    //getting groups
    const mock: IGroup = {
      buyingUsers: [{name:"סהר", slices: 4}],
      expireDate: new Date(),
      name: "סהר המלך",
      location: LocationsEnum.PazGaz
    };
    const mock2: IGroup = {
      buyingUsers: [{name:"סהר", slices: 3}],
      expireDate: new Date(),
      name: "לאביה חם",
      location: LocationsEnum.PazGaz
    };
    const mock3: IGroup = {
      buyingUsers: [{name:"סהר", slices: 6}],
      expireDate: new Date(),
      name: "גידי אחלה",
      location: LocationsEnum.PazGaz
    };
    const mock4: IGroup = {
      buyingUsers: [{name:"סהר", slices: 1}],
      expireDate: new Date(),
      name: "אבי סבבה",
      location: LocationsEnum.PazGaz
    };
    const mock5: IGroup = {
      buyingUsers: [{name:"סהר", slices: 3}],
      expireDate: new Date(),
      name: "נופר מורל",
      location: LocationsEnum.PazGaz
    };
    const mock6: IGroup = {
      buyingUsers: [{name:"סהר", slices: 2},{name:"גידי", slices: 3}],
      expireDate: new Date(),
      name: "נוי משהו",
      location: LocationsEnum.PazGaz
    };
    return [mock,mock2,mock3,mock4,mock5,mock6]
  }
  public getGroups(){
    return this.groups.sort((a,b) => (this.getSlicesNum(a) > this.getSlicesNum(b)) ? -1 : ((this.getSlicesNum(b) > this.getSlicesNum(a)) ? 1 : 0));
  }

  public getSlicesNum(group: IGroup): number{
    const x = group.buyingUsers.reduce((accumulator, currentValue) => accumulator + currentValue.slices, 0);
    console.log(x);
    return x
  }
}

interface IGroup {
  name: string,
  location: LocationsEnum
  expireDate: Date,
  buyingUsers: IBuyingUser[]
}

interface IBuyingUser {
  name: string,
  slices: number
}

