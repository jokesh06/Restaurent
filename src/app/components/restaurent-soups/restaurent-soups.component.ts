import { Component } from '@angular/core';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-restaurent-soups',
  templateUrl: './restaurent-soups.component.html',
  styleUrls: ['./restaurent-soups.component.css']
})
export class RestaurentSoupsComponent 
 
{
  arr1: any;
  successs=false;
  constructor(private __restaurentService:RestautarentService)
  {
   this.__restaurentService.get_soups().subscribe((data)=>{
    this.arr1=data;
    console.log(data)
   })
   
  }
  AddToCart(id:any)
  {
     this.__restaurentService.addtoCart(id).subscribe((data)=>{
        console.log(data);
     })
     this.successs = true;
    setTimeout(() => {
      this.successs = false; // Automatically close after 3 seconds
    }, 1000);
     

  }

}
