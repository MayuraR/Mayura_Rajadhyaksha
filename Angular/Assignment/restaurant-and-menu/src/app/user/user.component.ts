import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  index_menu : number = 0

  menu = new Array()

  order = ''

  restaurantList = this._service.getRestaurantList();

  menuList = this._service.getMenuList();
  
  constructor(private route : ActivatedRoute, private _service : ServiceService) { }

  ngOnInit(): void {
  }

  restaurantChosen(value:number){
    // console.log(this.menuList)
    let a = this._service.getMenuList()[value]
    this.menu =a.slice(1);
    this.index_menu = value
    
  }
  orderNow(value:string){
    if(value === ''){
      alert('please try again');
    }else{
      alert('Order Placed')
      this.order = value
    }
  }

}
