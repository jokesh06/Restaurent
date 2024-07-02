import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestautarentService } from 'src/app/services/restautarent.service';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent {



  files: any = File;
  constructor(
    private __formbuilder: FormBuilder,
    private __restaurent_service: RestautarentService,
    private __router:Router
  ) {
    
  }

  agroup = this.__formbuilder.group({
    Item_name: ['', Validators.required],
    images: ['', Validators.required]
   

    
    
    

  });

  formsubmit() {
    
    // const formdata = this.agroup.value;

    // if (Object.keys(formdata).length > 0)

    //this.agroup.value.images = this.files;
    console.log(this.agroup.value);

    this.__restaurent_service
      .addMenu(this.files,this.agroup.value )
      .subscribe(
        (data) => 
        console.log(data)

        );
        this.__router.navigate(['/restaurent_choosy'])
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
