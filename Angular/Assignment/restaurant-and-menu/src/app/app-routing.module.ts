import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from  './menu/menu.component';
import { RestaurantComponent } from  './restaurant/restaurant.component';
import { UserComponent } from './user/user.component'
import { AdminComponent } from './admin/admin.component'


const routes: Routes = [
  {path: 'admin', component: AdminComponent },
  {path: 'menu/:user', component: MenuComponent },
  {path: 'restaurant/:user', component: RestaurantComponent },
  {path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [MenuComponent, RestaurantComponent, UserComponent, AdminComponent]
