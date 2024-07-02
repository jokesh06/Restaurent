import { Component } from '@angular/core';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-restaurent-nonvegitems',
  templateUrl: './restaurent-nonvegitems.component.html',
  styleUrls: ['./restaurent-nonvegitems.component.css']
})
export class RestaurentNonvegitemsComponent
 {
    arr1:any;
     success=false;
    constructor(private __restaurentService:RestautarentService)
    {
       this.__restaurentService.get_nonvegitems().subscribe((data)=>
       {
        this.arr1=data;
        console.log(data)
       }
       )
    }
    Addtocart(id:any)
    {
        this.__restaurentService.addtoCart(id).subscribe((data)=>
      console.log(data));
        this.success = true;
        setTimeout(() => {
          this.success = false; // Hide the pop-up after 3 seconds
        }, 1000);
      };
    }


