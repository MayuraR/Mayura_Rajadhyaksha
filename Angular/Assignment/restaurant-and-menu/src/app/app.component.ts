import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-roots',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant-and-menu';

  constructor(private router : Router){}

  selectUser(){
      this.router.navigate(['/user'])
  }
  selectAdmin(){
    this.router.navigate(['/admin'])
    }
  
}
