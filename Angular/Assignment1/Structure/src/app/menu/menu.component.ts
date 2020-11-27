import { Component, OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Menu } from '../Menu';
import { Restaurant } from '../Restaurant'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  item = '';
  disable_add = true;
  disable_delete = true;
  index = 0;
  //rest = new Restaurant('name', [ ('item1', 100),('item2', 100),('item3' , 100) ])
  menu =['item1', 'item2'];
  constructor() { }

  ngOnInit(): void {
  }

  deleteFieldValue(){
    if(this.menu.length ===1){
      alert('Value cannot be deleted')
    }
    else{
      
      this.disable_delete = false;
    }
  }

  addFieldValue(){
    this.disable_add= false
  }

  addItem(){
    
    this.menu.push(this.item);
  }

  deleteItem(){
    const i = this.menu.indexOf(this.item)
      this.menu.splice(i,i+1);
      console.log(this.menu);
    
  }
}
