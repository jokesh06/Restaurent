import { Component } from '@angular/core';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-restaurent-vegitems',
  templateUrl: './restaurent-vegitems.component.html',
  styleUrls: ['./restaurent-vegitems.component.css']
})
export class RestaurentVegitemsComponent 
{
    arr1:any;
    successs=false;
  constructor(private __restaurentService:RestautarentService)
  {
  this.__restaurentService.get_vegitems().subscribe((data)=>{

    console.log(data)
    this.arr1=data
  });
  }
  AddToCart(id:any)
  {
     this.__restaurentService.addtoCart(id).subscribe((data)=>{
        console.log(data);
       
     })
     this.successs = true;
     setTimeout(() => {
       this.successs= false; // Hide the pop-up after 3 seconds
     }, 1000);
   };
  }


