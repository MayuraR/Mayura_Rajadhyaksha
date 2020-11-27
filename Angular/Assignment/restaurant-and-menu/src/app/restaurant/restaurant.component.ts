import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  user : any

  access : boolean = false

  value : boolean =true

  addText : boolean =true

  editText : boolean = true

  index : number = 0

  arr : string[] =[]

  prevValue =''


  constructor(private route : ActivatedRoute, private _service : ServiceService) { }

  ngOnInit(): void {

    this.user = this.route.snapshot.paramMap.get('user')
    if(this.user == 'admin'){
      this.value = false;
    }

  }

  restaurantList = this._service.getRestaurantList();
  menuList = this._service.getMenuList()

  addEnabled(){
    this.addText = false;
  }

  add(value: string){
    this.arr= value.split(',');
    this.restaurantList.push(this.arr[0]);
    this.menuList.push(this.arr);
    this._service.setMenuList(this.menuList)
    this._service.setRestaurantList(this.restaurantList);

    console.log(this.menuList)
  }
  delete(i:number){
    this.restaurantList.splice(i,1)
    this._service.setRestaurantList(this.restaurantList);
    this.menuList.splice(i,1)

    console.log(this.restaurantList)
    console.log(this.menuList)
  }
  edit(i){
    this.editText = false;
    this.index = i
  }
  editRest(value : string){
    this.prevValue = this.restaurantList[this.index]
    this.restaurantList[this.index] = value
    this._service.setRestaurantList(this.restaurantList);
    this.editText = true
    this.menuList[this.index][0]=value;
    this._service.setMenuList(this.menuList)
    
    console.log(this.restaurantList)
    console.log(this.menuList)
  }

  
  

}
