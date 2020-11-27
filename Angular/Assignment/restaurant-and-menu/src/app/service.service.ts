import { Injectable } from '@angular/core';
import { Menu } from './Menu';
import { Restaurant } from './Restaurant'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  restaurant_list =['r1', 'r2', 'r3']

  menu_list = [ ['r1', 'r1i1', 'r1i2', 'r1i3'] , ['r2', 'r2i1', 'r2i2', 'r2i3'] , ['r3', 'r3i1', 'r3i2', 'r3i3'] ]

  constructor() { }

  getRestaurantList(){
    return this.restaurant_list
  }

  setRestaurantList(updated_list:string[]){
    this.restaurant_list = updated_list
  }

  getMenuList(){
    return this.menu_list
  }

  setMenuList(updated_list){
    this.menu_list = updated_list
  }

}


