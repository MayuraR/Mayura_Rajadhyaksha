import { Component, OnInit, EventEmitter } from '@angular/core';
import { Advertisement } from '../Advertisement';
import { ActivatedRoute,Router } from '@angular/router';
import { AdvertisementServiceService } from '../advertisement-service.service';
import{FormsModule} from '@angular/forms';


@Component({
  selector: 'app-edit-product-component',
  templateUrl: './edit-product-component.component.html',
  styleUrls: ['./edit-product-component.component.css']
})
export class EditProductComponentComponent implements OnInit {


  category = ['Furniture', 'Hardware', 'Mobile'];

  constructor(private router :ActivatedRoute, private _advertisementService : AdvertisementServiceService,private route : Router) { }

  ngOnInit(): void { }

  x = this.router.snapshot.paramMap.get('id');

  userModel: Advertisement= this._advertisementService.getService(this.x);

  cancel(){
    this.route.navigate(['/'])
  }
  
  update(value){
    
    console.log(value);
    this._advertisementService.updateService(this.x, value);
    this.route.navigate(['/']);
  }

}
