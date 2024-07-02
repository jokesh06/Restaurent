import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent 
{      
     item_name:any;
     constructor(private __restaurentService:RestautarentService,
          private __activated:ActivatedRoute,
          private __route:Router )
     {
              this.__activated.paramMap.subscribe((params:ParamMap)=>{
                 this.item_name=params.get('item_name');
                console.log(this.item_name);
             this.__restaurentService.delete_item(this.item_name).subscribe((data)=>
                 console.log(data));
                 this.__route.navigate(['/update_item']);

              });
     }
}
