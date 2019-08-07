import { Injectable } from '@angular/core';
import {cloneDeep} from 'lodash'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
  private currentUser: IUser;


  public InitUser(name: string, location: BuildingOption){
    this.currentUser.name = name;
    this.currentUser.location = location
  }

  private GetCurrentUser(){
    return cloneDeep(this.currentUser);
  }

}

export interface IUser {
  name: string,
  location: BuildingOption

}

export enum BuildingOption{
  PazGaz = "PazGaz",
  Mifkada = "Mifkada",
  Eged = "Eged"
}
