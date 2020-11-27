import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routingComponents } from '../app-routing.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 user ='';

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
