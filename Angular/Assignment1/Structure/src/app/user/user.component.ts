import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routingComponents } from '../app-routing.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  menu(){
    this.router.navigate(['/menu'])
  }
  restaurant(){
    this.router.navigate(['/restaurant'])
  }
}
