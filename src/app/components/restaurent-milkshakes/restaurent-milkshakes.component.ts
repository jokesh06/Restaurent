import { Component } from '@angular/core';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-restaurent-milkshakes',
  templateUrl: './restaurent-milkshakes.component.html',
  styleUrls: ['./restaurent-milkshakes.component.css']
})
export class RestaurentMilkshakesComponent {
  arr1:any;
  successs=false;

  constructor(private __restaurentservice:RestautarentService)
  {
    this.__restaurentservice.get_milkshakes().subscribe((data)=>{
       this.arr1=data;
       console.log(data)
    })
  }
  AddToCart(id:any)
  {
     this.__restaurentservice.addtoCart(id).subscribe((data)=>{
        console.log(data);
     })
     this.successs = true;
     setTimeout(() => {
       this.successs = false; // Hide the pop-up after 3 seconds
     }, 1000);
   };
  }

