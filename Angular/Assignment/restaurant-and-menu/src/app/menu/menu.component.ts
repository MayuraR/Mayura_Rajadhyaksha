import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user : any

  access : boolean = false

  value : boolean =true

  addText : boolean =true

  editText : boolean = true

  index : number = 0

  index_menu : number = 0

  arr : string[] =[]

  menu = new Array()

  restaurantList = this._service.getRestaurantList();

  menuList = this._service.getMenuList();
  
  constructor(private route : ActivatedRoute, private _service : ServiceService) { }

  ngOnInit(): void {

    this.user = this.route.snapshot.paramMap.get('user')
    if(this.user == 'admin'){
      this.value = false;
    }
    
  }

  
  restaurantChosen(value:number){

    let a = this._service.getMenuList()[value]
    this.menu =a.slice(1);
    this.index_menu = value
    
  }

  addEnabled(){
    this.addText = false;
  }

  add(value: string){
    this.arr= value.split(',');
    this.restaurantList.push(this.arr[0]);
    this.menuList.push(this.arr);
    this._service.setMenuList(this.menuList)
    this._service.setRestaurantList(this.restaurantList);

  }

  delete(i:number){
    this.menuList[this.index_menu].splice(i+1,1)
    this._service.setMenuList(this.menuList);
    this.restaurantChosen(this.index_menu)
  }

  edit(i:number){
    this.editText = false;
    this.index = i
  }

  editMenu(value : string){
    this.editText = true
    this.menuList[this.index_menu][this.index+1]=value;
    this._service.setMenuList(this.menuList)
    this.restaurantChosen(this.index_menu)
    
  }

  
  
  }

