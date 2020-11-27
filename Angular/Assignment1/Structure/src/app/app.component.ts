import { Component, Input } from '@angular/core';
import { routingComponents } from './app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Structure';

  user = ''

  constructor(private router : Router){ }

  chooseAdmin(){
    this.user= 'admin';
    this.router.navigate(['/admin']);
  }

  chooseUser(){
    this.user = 'user';
    this.router.navigate(['/user'])
  }

}

