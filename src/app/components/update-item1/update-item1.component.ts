import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-update-item1',
  templateUrl: './update-item1.component.html',
  styleUrls: ['./update-item1.component.css'],
})
export class UpdateItem1Component {
  agroup: any;
  arr1: any;
  files: File;
  item_name12: any;
  check:boolean=true;
  constructor(
    private __restaurentService: RestautarentService,
    private __formBuilder: FormBuilder,
    private __activated: ActivatedRoute,
    private __route:Router
  ) 
  {
     this.__activated.paramMap.subscribe((params: ParamMap) => {
      this. item_name12 = params.get('item_name');
      console.log(this.item_name12)
    });
    console.log(this.item_name12+"bhhhhh");
    this.__restaurentService.get_itemfind(this.item_name12).subscribe((data) => {
     
             if(data!=null)
             {
           this.arr1 = data; 
          console.log(data);
          console.log("hekkk");
             }
            else
            console.log("error");
    });
    this.agroup = this.__formBuilder.group({
      Item_name: ['',Validators.required],
      actual_price: ['',Validators.required],
      discount: ['',Validators.required],
      Quantity: ['',Validators.required],
      item_image: ['',Validators.required],
    });
  }
  updatesubmit() {
    // this.agroup = this.__formBuilder.group({
    //   Item_name: ['',Validators.required],
    //   actual_price: ['',Validators.required],
    //   dicount: ['',Validators.required],
    //   Quantity: ['',Validators.required],
    
    // });
    console.log("jokeshgfdsf")
    console.log(this.agroup)
    this.__restaurentService.update_item(this.agroup.value, this.files);
    this.__route.navigate(['/update_item'])
    
  }
  onSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    this.files = file;
    this.check=false;
  }
}
