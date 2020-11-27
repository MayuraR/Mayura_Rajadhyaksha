import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user = ''

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  selectAdmin(){
    this.user = 'admin'
  }

  selectOwner(){
    this.user = 'owner'
  }

  selectMenu(){
    this.router.navigate(['/menu',this.user])
  }

  selectRestaurant(){
    this.router.navigate(['/restaurant',this.user])
  }


}
