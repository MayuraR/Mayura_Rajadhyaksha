import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule, routeComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertisementServiceService } from './advertisement-service.service';

@NgModule({
  declarations: [
    AppComponent,
    routeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, AdvertisementServiceService]
})
export class AppModule { }
