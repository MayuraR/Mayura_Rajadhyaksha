import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  item = '';
  disable_add = true;
  disable_delete = true;
  index = 0;
  restaurant = ['r1', 'r2'];
  constructor() { }
   


  ngOnInit(): void {
  }

  deleteFieldValue(){
    if(this.restaurant.length ===1){
      alert('Value cannot be deleted')
    }
    else{
      
      this.disable_delete = false;
    }
  }

  addFieldValue(){
    this.disable_add= false;
  }

  addItem(){
    
    this.restaurant.push(this.item);
  }

  deleteItem(){
    const i = this.restaurant.indexOf(this.item)
      this.restaurant.splice(i,i+1);
      console.log(this.restaurant);
    
  }
}
