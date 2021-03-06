import { Injectable } from '@angular/core';
import {IUser, LocationsEnum, UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private groups: IGroup[];
  private isGroupSelected = false;
  public SelectedGroup: IGroup;

  constructor(private userService: UserService) {
    this.groups = this.GetAllGroups();
  }

  public IsGroupSelcted(){
    return this.isGroupSelected;
  }
  public JoinToGroup(group: IGroup, user: IUser, slices: number):number{
    this.userService.IsLoading = true;

    let used = slices;
    let slicesLeft = 8 - this.getSlicesNum(group) - slices;
    if(slicesLeft < 0){
      const abs = Math.abs(slicesLeft);
      used = slices - abs;
    }
    group.buyingUsers.push({name: user.name,slices:used});
    this.SelectedGroup = group;
    setTimeout(()=>{
      this.isGroupSelected = true;
      this.userService.IsLoading = false;
    },3000)

    return used;
  }
  private GetAllGroups(): IGroup[]{
    //getting groups
    const mock: IGroup = {
      buyingUsers: [{name:"סהר", slices: 1},{name:"איתי", slices: 4}],
      expireDate: new Date(),
      name: "סהר המלך",
      location: LocationsEnum.PazGaz
    };
    const mock2: IGroup = {
      buyingUsers: [{name:"סהר", slices: 3},{name:"סהר", slices: 4}],
      expireDate: new Date(),
      name: "לאביה חם",
      location: LocationsEnum.PazGaz
    };
    const mock3: IGroup = {
      buyingUsers: [{name:"גיבור", slices: 2},{name:"סהר", slices: 1},{name:"עדיאל", slices: 1}],
      expireDate: new Date(),
      name: "גידי אחלה",
      location: LocationsEnum.PazGaz
    };
    const mock4: IGroup = {
      buyingUsers: [{name:"מירון", slices: 6},{name:"אלמוג", slices: 1}],
      expireDate: new Date(),
      name: "אבי סבבה",
      location: LocationsEnum.PazGaz
    };
    const mock5: IGroup = {
      buyingUsers: [{name:"איתי", slices: 3},{name:"סהר", slices: 1}],
      expireDate: new Date(),
      name: "נופר מורל",
      location: LocationsEnum.PazGaz
    };
    const mock6: IGroup = {
      buyingUsers: [{name:"אלון", slices: 1},{name:"גידי", slices: 3},{name:"סהר", slices: 2}],
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
    return x
  }
}

export interface IGroup {
  name: string,
  location: LocationsEnum
  expireDate: Date,
  buyingUsers: IBuyingUser[]
}

interface IBuyingUser {
  name: string,
  slices: number
}

