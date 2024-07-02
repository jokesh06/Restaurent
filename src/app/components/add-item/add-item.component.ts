import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
 // agroup: any;
  files: any = File;
  constructor(
    private __formbuilder: FormBuilder,
    private __restaurent_service: RestautarentService,
    private __router:Router
  ) {
    
  }

  agroup = this.__formbuilder.group({
    Item_name: ['', Validators.required],
    actual_price: ['', Validators.required],
    Quantity: ['', Validators.required],
    images: ['', Validators.required],
    Discount: ['', Validators.required],
    category:['',Validators.required]

    
    
    

  });

  formsubmit() {
    
    // const formdata = this.agroup.value;

    // if (Object.keys(formdata).length > 0)

    //this.agroup.value.images = this.files;
    console.log(this.agroup.value);

    this.__restaurent_service
      .submit_itemlist(this.agroup.value, this.files)
      .subscribe(
        (data) => 
        console.log(data)

        );
        this.__router.navigate(['/update_item'])
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
