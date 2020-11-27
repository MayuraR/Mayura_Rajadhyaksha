import { Component, OnInit, Input} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Advertisement } from '../Advertisement';
import{FormsModule} from '@angular/forms';
import { AdvertisementServiceService } from '../advertisement-service.service';
import { Router } from '@angular/router'
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-advertisement-table-component',
  templateUrl: './advertisement-table-component.component.html',
  styleUrls: ['./advertisement-table-component.component.css']
})
export class AdvertisementTableComponentComponent implements OnInit {

  public array : Advertisement[];

  public filter_array:Advertisement[];

  constructor(private _advertisementService : AdvertisementServiceService , private router : Router) { }

  ngOnInit(): void {
    this.array = this._advertisementService.getAllService();
  }

  edit(value: number){
    this.router.navigate(['/edit', value])
  }

  delete(i:number){

    this._advertisementService.deleteService(i);
  }
  filter(name:string, title:string){
    this.filter_array = []
    this.array = this._advertisementService.getAllService();
    for (let i=0; i<this.array.length; i++){
      if( (name===this.array[i].Name || name ==='') && (title===this.array[i].Title || title ==='' )){
          this.filter_array.push(this.array[i])
      }
      
    }
    this.array = this.filter_array
  }
}
