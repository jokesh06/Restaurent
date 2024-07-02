import { Component } from '@angular/core';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-all-itemlist',
  templateUrl: './all-itemlist.component.html',
  styleUrls: ['./all-itemlist.component.css']
})
export class AllItemlistComponent
{
  arr1: any;
  constructor(private __restaurentService: RestautarentService) {
    this.__restaurentService.get_items().subscribe((data) => {
      this.arr1=data
      console.log(data);
    });
  }
}
