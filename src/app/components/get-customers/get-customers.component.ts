import { Component } from '@angular/core';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent 
{
  arr1:any;
  constructor(private __restaurentService:RestautarentService)
  {
   this.__restaurentService.get_customer().subscribe((data)=>{
    this.arr1=data
       console.log(data);
   })
  }
}
