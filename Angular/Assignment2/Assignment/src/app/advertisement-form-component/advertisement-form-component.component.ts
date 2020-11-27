import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Advertisement } from '../Advertisement';
import { AdvertisementServiceService } from '../advertisement-service.service';

@Component({
  selector: 'app-advertisement-form-component',
  templateUrl: './advertisement-form-component.component.html',
  styleUrls: ['./advertisement-form-component.component.css']
})
export class AdvertisementFormComponentComponent implements OnInit {
  
  category = ['Furniture', 'Hardware', 'Mobile'];

  userModel = new Advertisement( '','', 'Mayura', '', '');

  constructor(private _advertisementService : AdvertisementServiceService) { }

  ngOnInit(): void { }
  
  onSubmit(value){
    console.log (value)
    
    this._advertisementService.addService(value);
    console.log('done');
  }

}
