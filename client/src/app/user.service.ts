import { Injectable } from '@angular/core';
import {cloneDeep} from 'lodash'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
  public Initialized = false;

  public currentUser: IUser ={
    name: "",
    location: null
  };



  public InitUser(name: string, location: LocationsEnum){
    this.currentUser.name = name;
    this.currentUser.location = location;
    this.Initialized = true;
    console.log("connected:");
    console.log(this.currentUser);
  }

  public GetCurrentUser(): IUser{
    this.isInitialized();
    return cloneDeep(this.currentUser);
  }

  private isInitialized(){
    if(!this.isInitialized){
      throw new Error("User not Inited")
    }
  }

}

export interface IUser {
  name: string,
  location: LocationsEnum

}

export enum LocationsEnum{
  PazGaz = "PazGaz",
  Mifkada = "Mifkada",
  Eged = "Eged"
}
