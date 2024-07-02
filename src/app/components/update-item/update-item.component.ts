import { Component } from '@angular/core';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
})
export class UpdateItemComponent {
  arr1:any;
  constructor(private __restaurentService: RestautarentService)
   {
    this.__restaurentService.get_items().subscribe((data) => {
      
      this.arr1=data
      console.log(data);
    });
  }
}
