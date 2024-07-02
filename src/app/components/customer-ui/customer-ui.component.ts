import { Component } from '@angular/core';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-customer-ui',
  templateUrl: './customer-ui.component.html',
  styleUrls: ['./customer-ui.component.css']
})
export class CustomerUIComponent {
  arr1:any;
  successs: boolean=false;
  constructor(private __restaurentService: RestautarentService) {
    this.__restaurentService.get_items().subscribe((data) =>{
      
      this.arr1=data
      
     console.log(this.arr1);
      
  });
  }
  AddToCart(id:any)
  {
      this.__restaurentService.addtoCart(id).subscribe((data)=>
    console.log(data));
      this.successs = true;
      setTimeout(() => {
        this.successs = false; // Hide the pop-up after 3 seconds
      }, 1000);
    };
  }


