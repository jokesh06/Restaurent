import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurent-home',
  templateUrl: './restaurent-home.component.html',
  styleUrls: ['./restaurent-home.component.css']
})
export class RestaurentHomeComponent {
  success:boolean=false;
  unSuccess:boolean=true;
  Clickable()
  {
    this.success=!false;
    this.unSuccess=!true;
  }

}
