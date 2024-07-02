import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-restaurent-add-nonvegitems',
  templateUrl: './restaurent-add-nonvegitems.component.html',
  styleUrls: ['./restaurent-add-nonvegitems.component.css']
})
export class RestaurentAddNonvegitemsComponent 
{

  files: any = File;
  constructor(
    private __formbuilder: FormBuilder,
    private __restaurent_service: RestautarentService,
    private __router:Router
  ) {
    
  }

  agroup = this.__formbuilder.group({
    item_name: ['', Validators.required],
    item_price: ['', Validators.required],
    item_description: ['', Validators.required],
    item_image: ['', Validators.required],
    item_offer:['',Validators.required]
  });

  formsubmit() {
    
    // const formdata = this.agroup.value;

    // if (Object.keys(formdata).length > 0)

    //this.agroup.value.images = this.files;
    console.log(this.agroup.value);

    this.__restaurent_service
      .submit_nonvegitems(this.agroup.value, this.files)
      .subscribe(
        (data) => 
        console.log(data)

        );
        this.__router.navigate(['/nonveg_item'])
  }

  file(event: Event) {
    console.log('hh');
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    this.files = file;
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    this.files = file;
  }
}