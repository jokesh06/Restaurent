import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-restaurent-icecreams',
  templateUrl: './restaurent-icecreams.component.html',
  styleUrls: ['./restaurent-icecreams.component.css']
})
export class RestaurentIcecreamsComponent
 {
   arr1:any;
   successs: boolean = false;;
   constructor(private __restaurentservice:RestautarentService,
              private __router:Router

      )
   {
     this.__restaurentservice.get_icecreams().subscribe((data)=>{
        this.arr1=data;
        console.log(data)
     })
     
   }
   AddToCart(id:any)
   {
       this.__restaurentservice.addtoCart(id).subscribe((data)=>{
     console.log(data)
           this.arr1=data
           this.successs = true;
           setTimeout(() => {
             this.successs = false; // Automatically close after 3 seconds
           }, 1000);
         
        
        
       
        });
       
   

}
 }
