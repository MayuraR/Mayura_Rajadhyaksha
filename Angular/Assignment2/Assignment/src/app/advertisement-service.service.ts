import { Injectable } from '@angular/core';
import { Advertisement } from './Advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementServiceService {

  dummyData_1 = new Advertisement( 'item_1','item1_title', 'name_1', 'Furniture', 'desc_1');

  dummyData_2 = new Advertisement( 'item_2','item2_title', 'name_2', 'Hardware', 'desc_2');

  dummyData_3 = new Advertisement( 'item_3','item3_title', 'name_3', 'Mobile', 'desc_3');

  array: Advertisement[] = [this.dummyData_1, this.dummyData_2, this.dummyData_3];  


  constructor() { }

  getAllService(){
    return this.array;
  }

  getService(value){

  return this.array[value]

  }
  addService(value:Advertisement){
    this.array.push(value);
  }

  updateService(x ,value:Advertisement){
    this.deleteService(x)
    this.array.push(value);
  }

  deleteService(i:number){
  
    this.array.splice(i,1);

  }
}
